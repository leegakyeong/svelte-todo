<script>
  import { todos } from './stores';

  export let id;
  export let content;
  export let done;

  let editing = false;

  function toggleDone() {
    todos.set($todos.map(x => {
      if (x.id === id) x.done = !x.done;
      return x;
    }));
  }

  function edit() {
    todos.set($todos.map(x => {
      if (x.id === id) x.content = content;
      return x;
    }));
    editing = false;
  }

  function removeTodo() {
    todos.update(t => {
      return t.filter(todo => todo.id !== id);
    });
  }
</script>

<div class="todo-container">
  {#if editing}
    <form>
      <input bind:value={content} />
      <button on:click|preventDefault={edit}>수정 완료</button>
    </form>
  {:else}
    {#if done}
      <div style="text-decoration: line-through;">{content}</div>
    {:else}
      <div>{content}</div>
    {/if}
    <div>
      {#if done}
        <button on:click={toggleDone}>취소</button>
      {:else}
        <button on:click={() => editing = true}>수정</button>
        <button on:click={toggleDone}>완료</button>
      {/if}
      <button on:click={removeTodo} style="margin-left: 10px;">삭제</button>
    </div>
  {/if}
</div>

<style>
  .todo-container {
    display: flex;
    width: 400px;
    border: 1px solid black;
    margin-bottom: 10px;
    justify-content: space-between;
  }
  form {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  button, input {
    padding: 0px;
    margin: 0px;
  }
</style>
