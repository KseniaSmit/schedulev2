<script>
    export let classes = "";
    export let type = "button";

</script>

<button class={classes} type={type}
    on:click|preventDefault>
    <slot></slot>
</button>

<style>
    button {
  border-radius: 3px;
  margin-left: 10px;
  color: #333;
  background-color: #f4f4f4;
  outline: none;
}

button:hover {
  cursor: pointer;
}
.c {
    text-align: center;
}
.inline {
  display: inline;
}
</style>