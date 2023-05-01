<script lang="ts">
	import { selectedBook } from "$lib/utils/stores";
	import type { Book } from "shared-component/dist/entity/Book";

	let book:Book;
	selectedBook.subscribe((value:Book) => 
	{
		console.log("New book selected");
		book = value});
</script>

<div class="container mt-3 bg-light">
	<div class="row">Hello</div>
	<h1>{book.title}</h1>
</div>
