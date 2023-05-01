<script lang="ts">
	import type { Book } from "shared-component/dist/entity/Book";
	import { getContext } from "svelte";
	

	const {clickedBook}= getContext("clickBook");

	let selectedBook = clickedBook()

	console.log(clickedBook);


</script>

<div class="container mt-3 bg-light">
	<div class="row">Hello</div>
</div>
