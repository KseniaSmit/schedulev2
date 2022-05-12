<script>
  import { onMount } from "svelte";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  import { fetchGet, fetchPost } from "../../helpers";
  import List from "./List.svelte";
  import Button from "../Interface/Button.svelte";
  import TextInput from "../Interface/TextInput.svelte";


  onMount(() => {
    getLists();
  });

  let lists = [];
  let listName = "";


  async function getLists() {
    const response = await fetchGet("/lists");
    lists = response.lists;
  }


  async function addList() {
    const response = await fetchPost(
      "/addList", {name: listName}
    );
    if (!response.success) {
      dispatch("display-error", response.message);
      return false;
    }
    lists = [...lists, response.list];
    listName = "";
  }


  async function deleteList(event) {
    const selectedId = event.detail;
    const res = await fetch(
      `/deleteList/${selectedId}`, {method: "DELETE"}
    );
    const response = await res.json();
    if (!response.success) {
      dispatch("display-error", response.message);
      return false;
    }
    const updatedLists = lists.filter(
      list => list.id !== selectedId
    );
    lists = updatedLists;
  }


  async function logoutUser() {
    dispatch("logout-user");
    const res = await fetch(`/logout`);
    const response = await res.json();
  }


</script>

  <div class="header">
    <span class="headline">
      Schedule app
    </span>
    <div class="logout-button">
      <Button
        on:click={logoutUser}>
          Выход
      </Button>
    </div>
  </div>

  <div class="column">
  {#if lists}
    {#each lists as list, index (list.id)}
      <List name={list.name} id={list.id}
        on:delete-list={deleteList}
        on:display-list-error={event => {
          dispatch("display-error", event.detail)
        }} />
    {/each}
  {/if}

  <div class="new-list">
    <form>
      <TextInput
        classes="margin-left inline longer"
        placeholder="Введите название списка"
        on:input={event => listName = event.target.value}
        value={listName} />
    <br>
    <br>
      <Button
        type="submit"
        classes={"inline"}
        on:click={addList}>
          Добавить Список
      </Button>
    </form>
  </div>

  </div>

<style>

:global(body) {
  margin: 0;
  background-color: #E0B0FF;
}

:global(:root) {
  --theme-color: #FFF;
}

.header {
  position: fixed;
  width: 100%;
  height: 50px;
  display: flex;
  top: 0;
  left: 0;
  background-color: #EA8DF7;
  justify-content: flex-end;
  align-content: center;
}

.headline {
  position: relative;
  font-size: 32px;
  margin: auto;
  left: 60px;
  font-weight: 800;
  color: #efe;
}

.logout-button {
  position: relative;
  right: 10px;
  top: 5px;
}

.column {
  display: flex;
  justify-content: flex-start;
  margin-top: 50px;
}

.column input {
  margin: 0 0.35rem;
  height: 35px;
}

.new-list {
  margin: 12px;
  margin-top: 1.2rem;
}

.new-list {
  margin: 12px;
  margin-top: 1.2rem;
}

form * {
  display: inline;
}
</style>