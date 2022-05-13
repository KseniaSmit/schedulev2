<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  import { fetchPost } from "../../helpers";
  import Button from "../Interface/Button.svelte";
  import TextInput from "../Interface/TextInput.svelte";


  let email = "";
  let password = "";
  let confirmPassword = "";
  let login = true;


  async function loginUser() {
    const response = await fetchPost(
      "/login", {email: email, password: password}
    );
    if (!response.success) {
      dispatch("display-error", response.message);
      return false;
    }
    dispatch("login-user", response);
  }


  async function signUpUser() {
    if (password !== confirmPassword) {
      dispatch("display-error", "Пароли не совпадают");
      return false;
    }
    const response = await fetchPost(
      "/signup", {email: email, password: password}
    );
    if (!response.success) {
      dispatch("display-error", response.message);
      return false;
    }
    errorShow = false;
    dispatch("login-user", response);
  }

</script>

<div id="card">
    <div class="header">
    {#if login}
      <h1>Авторизация</h1>
    {:else}
      <h1>Регистрация</h1>
    {/if}
      </div>
    <hr>
    <div class="form">
    <form>
    <label>
    E-mail<br>
    <TextInput
      classes={"longer"}
      type="email"
      placeholder="Введите свой e-mail"
      on:input={event => email = event.target.value}
      value={email} />
    </label>

    <label>
    Пароль<br>
    <TextInput
      classes={"longer"}
      type="password"
      placeholder="Введите пароль"
      on:input={event => password = event.target.value}
      value={password} />
    </label>

    {#if !login}
    <label>
    Подтверждение пароля<br>
    <TextInput
      classes={"longer"}
      type="password"
      placeholder="Введите пароль снова"
      on:input={event => confirmPassword = event.target.value}
      value={confirmPassword} />
    </label>

    <Button type="submit"
      on:click={signUpUser}>
        Регистрация
    </Button>

    {:else}

    <Button type="submit"
      on:click={loginUser}>
        Авторизация
    </Button>

    {/if}
    <label>
    Авторизация
    <input type="checkbox" name="login" bind:checked={login}>
    </label>

    </form>
    </div>
    </div>


<style>

#card {
  background-color: #FFF;
  position: relative;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  padding: 12px;
  min-width: 25%;
  max-width: 30%;
  min-height: 20rem;
  margin: 5rem auto;
  border-radius: 3px;
}

.form {
  position: relative;
  margin: 4rem auto;
  left: 85px;
}

label {
  margin-bottom: 1.5rem;
}

</style>

