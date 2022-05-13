from flask import Flask, send_from_directory, render_template, request, jsonify, current_app
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager, current_user, login_user, logout_user, login_required, UserMixin
from addhelp import unauthorized, auth_list_permissions
from werkzeug.security import generate_password_hash, check_password_hash
from itsdangerous import TimedSerializer as Serializer
import os
import datetime

app = Flask(__name__, template_folder="svelte-client/public", static_folder="svelte-client/public/build")
DEVELOPMENT = bool(os.environ.get("FLASK_DEVELOPMENT"))
app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0
app.config["SQLALCHEMY_DATABASE_URI"] = 'postgresql://postgres:1234@localhost/schedulev2'
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.config["SECRET_KEY"] = os.environ.get("SECRET_KEY") or "hardkey"

db = SQLAlchemy(app)
login_manager = LoginManager()
login_manager.init_app(app)


@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))


def now():
    return datetime.datetime.utcnow().replace(tzinfo=datetime.timezone.utc)


class Note(db.Model):
    __tablename__ = 'notes'

    id = db.Column(db.Integer(), primary_key=True)
    body = db.Column(db.Text(), index=True, nullable=False)
    timestamp = db.Column(db.Text(), nullable=False, default=now)
    list_id = db.Column(db.Integer(), db.ForeignKey("lists.id"))

    def __init__(self, body, list_id):
        self.body = body
        self.list_id = list_id

    def __repr__(self):
        return f"Note(id: {self.id}, body: {self.body}, list_id: {self.list_id})"

    def to_json(self):
        json_note = {
            "id": self.id,
            "body": self.body,
            "list_id": self.list_id,
            "timestamp": self.timestamp,
        }
        return json_note

    @staticmethod
    def from_json(json_note):
        body = json_note.get('body')
        list_id = json_note.get('list_id')
        if (
                body is None
                or list_id is None
                or body == ''
                or list_id == ''
        ):
            raise Exception('Note does not have a body or list_id')
        return Note(body=body, list_id=list_id)


class List(db.Model):
    __tablename__ = 'lists'

    id = db.Column(db.Integer(), primary_key=True)
    name = db.Column(db.Text(), index=True, nullable=False)
    notes = db.relationship("Note", backref="list")
    user_id = db.Column(db.Integer(), db.ForeignKey("users.id"))

    def __init__(self, name, user_id):
        self.name = name
        self.user_id = user_id

    def __repr__(self):
        return f"List(id: {self.id}, name: {self.name}, user_id: {self.user_id})"

    def to_json(self):
        json_list = {
            "id": self.id,
            "name": self.name,
            "user_id": self.user_id,
        }
        return json_list

    @staticmethod
    def from_json(json_list):
        name = json_list.get('name')
        user_id = json_list.get('user_id')
        if name is None or name == '' or user_id is None or user_id == '':
            raise Exception('List does not have a name or User ID')
        return List(name=name, user_id=user_id)


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer(), primary_key=True)
    email = db.Column(db.String(64), unique=True, index=True, nullable=False)
    password_hash = db.Column(db.String(128), nullable=False)
    lists = db.relationship("List", backref="user")

    def __init__(self, email, password):
        self.email = email.lower()
        self.password_hash = generate_password_hash(password)

    def __repr__(self):
        return f"User(id: {self.id}, email: {self.email})"

    def verify_password(self, password):
        return check_password_hash(self.password_hash, password)

    @property
    def password(self):
        return AttributeError("Password is not a readable attribute")

    @password.setter
    def password(self, password):
        self.password_hash = generate_password_hash(password)

    def generate_confirmation_token(self, expiration=3600):
        s = Serializer(current_app.config['SECRET_KEY'],
                       expiration)
        return s.dumps({'confirm': self.id}).decode('utf-8')

    def generate_reset_token(self, expiration=3600):
        s = Serializer(current_app.config['SECRET_KEY'], expiration)
        return s.dumps({'reset': self.id}).decode('utf-8')

    @staticmethod
    def reset_password(token, new_password):
        s = Serializer(current_app.config['SECRET_KEY'])
        try:
            data = s.loads(token.encode('utf-8'))
        except Exception:
            return False
        user = User.query.get(data.get('reset'))
        if user is None:
            return False
        user.password_hash = generate_password_hash(new_password)
        db.session.add(user)
        db.session.commit()
        return True

    def generate_auth_token(self, expiration):
        s = Serializer(current_app.config['SECRET_KEY'],
                       expires_in=expiration)
        return s.dumps({"id": self.id}).decode('utf-8')

    @staticmethod
    def verify_auth_token(token):
        s = Serializer(current_app.config['SECRET_KEY'])
        try:
            data = s.loads(token)
        except Exception:
            return None
        return User.query.get(data['id'])

    @staticmethod
    def from_json(json_user):
        email = json_user.get('email')
        password = json_user.get('password')
        if (
                email is None
                or password is None
                or email == ''
                or password == ''
        ):
            raise Exception('User does not have an email or password')
        return User(email=email, password=password)


db.create_all()


@app.route("/")
def client():
    return send_from_directory("svelte-client/public", "index.html")


@app.route("/<path:path>")
def home(path):
    return send_from_directory("svelte-client/public", path)


@app.route("/checkLogin")
def check_login():
    if current_user.is_authenticated:
        print(f"current user: User(id: {current_user.id}, email: {current_user.email})")
        return jsonify(logged_in=True)
    print("No user logged in")
    return jsonify(logged_in=False)


@app.route("/login", methods=["POST"])
def user_login():
    email = request.get_json().get("email")
    password = request.get_json().get("password")
    if not email or not password:
        return jsonify(success=False, message="no email or password supplied")
    user = User.query.filter_by(email=email.lower()).first()
    if user is not None and user.verify_password(password):
        login_user(user)
        return jsonify(success=True)
    return jsonify(success=False, message="login failed")


@app.route("/logout")
@login_required
def user_logout():
    logout_user()
    return jsonify(success=True, message="successfully logged out")


@app.route("/signup", methods=["POST"])
def user_signup():
    email = request.get_json().get("email")
    password = request.get_json().get("password")
    user_exists = User.query.filter_by(email=email.lower()).first()
    if user_exists:
        return jsonify(success=False, message="email already exists")
    if not email:
        return jsonify(success=False, message="must provide an email address")
    user = User(email.lower(), password)
    db.session.add(user)
    db.session.commit()
    login_user(user)
    return jsonify(success=True, message="successfully signed up")


@app.route("/lists")
@login_required
def get_lists():
    lists = List.query.filter_by(user_id=current_user.id).all()
    return jsonify(lists=[list.to_json() for list in lists])


@app.route("/addList", methods=["POST"])
@login_required
def add_list():
    name = request.get_json().get("name")
    if not name:
        return jsonify(success=False, message="must provide a list name"), 400
    user_id = current_user.id
    new_list = List(name, user_id)
    db.session.add(new_list)
    db.session.commit()
    return jsonify(success=True, list=new_list.to_json())


@app.route("/deleteList/<int:list_id>", methods=["DELETE"])
@login_required
def delete_list(list_id):
    if not auth_list_permissions(current_user, list_id):
        return unauthorized()
    Note.query.filter_by(list_id=list_id).delete()
    List.query.filter_by(id=list_id).delete()
    db.session.commit()
    return jsonify(success=True, message=f"list {list_id} deleted")


@app.route("/list/<int:list_id>/notes")
@login_required
def get_notes(list_id):
    notes = Note.query.filter_by(list_id=list_id).order_by(Note.timestamp).all()
    if not auth_list_permissions(current_user, list_id):
        return unauthorized()
    return jsonify(success=True, notes=[note.to_json() for note in notes])


@app.route("/addNote", methods=["POST"])
@login_required
def add_note():
    new_note = request.get_json()
    list_id = new_note.get("list_id")
    body = new_note.get("body")
    if not list_id or not body:
        return jsonify(success=False, message=("missing note information")), 400
    if not auth_list_permissions(current_user, list_id):
        return unauthorized()
    note = Note.from_json(new_note)
    db.session.add(note)
    db.session.commit()
    return jsonify(success=True, note=note.to_json()), 201


@app.route("/<int:list_id>/deleteNote/<int:note_id>", methods=["DELETE"])
@login_required
def delete_note(list_id, note_id):
    if not auth_list_permissions(current_user, list_id):
        return unauthorized()
    Note.query.filter_by(id=note_id).delete()
    db.session.commit()
    return jsonify(success=True, message=(f"note {note_id} deleted from list {list_id}"))


@app.route("/editNote/<int:note_id>", methods=["POST"])
@login_required
def edit_note(note_id):
    body = request.get_json().get("body")
    if not body:
        return jsonify(success=False, message="must provide a note"), 400
    note = Note.query.filter_by(id=note_id).first()
    list_id = note.list_id
    if not auth_list_permissions(current_user, list_id):
        return unauthorized()
    note.body = body
    db.session.commit()
    return jsonify(success=True, message=(f"note {note_id} updated to '{body}'"))


@app.after_request
def add_header(r):
    """
    Add headers to both force latest IE rendering engine or Chrome Frame,
    and also to cache the rendered page for 10 minutes.
    """
    r.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
    r.headers["Pragma"] = "no-cache"
    r.headers["Expires"] = "0"
    r.headers['Cache-Control'] = 'public, max-age=0'
    return r


if __name__ == "__main__":
    app.config['TEMPLATES_AUTO_RELOAD'] = True
    app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0
    app.run(port=3000)