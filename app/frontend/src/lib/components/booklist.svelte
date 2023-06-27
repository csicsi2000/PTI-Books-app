<script lang="ts">
	import { getBook } from '$lib/api/backend/bookApi';
	import { allBooks, bookFromDatabase, selectedBook } from '$lib/utils/stores';
	import type { Book } from 'shared-component/dist/entity/Book';
	import ShowBook from './showBook.svelte';

	// Initialize an empty array of Book objects
	export let books: Book[] = [];

	allBooks.subscribe((value: Book[]) => {
		books = value;
	});
</script>

{#each books as singleBook}
	<!-- Render each book as a card using Bootstrap -->
	<ShowBook book={singleBook} />
{/each}
