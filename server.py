from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager
import os

app = Flask(__name__)

app.config["SQLALCHEMY_DATABASE_URI"] = 'postgres://postgres:1234@localhost/schedulev2'
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.config["SECRET_KEY"] = os.environ.get("SECRET_KEY") or "hardkey"

db = SQLAlchemy(app)
login_manager = LoginManager()
login_manager.init_app(app)


@app.route('/')
def index():
    return "Hello world!"


if __name__ == "__main__":
    app.run(port=3000)