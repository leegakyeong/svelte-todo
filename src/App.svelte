<script>
	import { todos } from './stores.js';
	import Todo from './Todo.svelte';

	export let name;

	let newTodoContent;

	function handleClick() {
		const newTodo = {
			id: $todos.length + 1,
			done: false,
			content: newTodoContent,
		};
		todos.set([...$todos, newTodo]);
		newTodoContent = '';
	}
</script>

<main>
	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
	<div>
		<form>
			<input bind:value={newTodoContent} />
			<button on:click|preventDefault={handleClick}>추가</button>
		</form>
		{#each $todos as todo (todo.id)}
			<Todo id={todo.id} content={todo.content} done={todo.done} />
		{/each}
	</div>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	div {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
