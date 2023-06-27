<script lang="ts">
	import { authResp, booklist_name, favoriteBooks } from '$lib/utils/stores';
	import type { Book } from 'shared-component/dist/entity/Book';
	import ShowBook from '$lib/components/showBook.svelte';
	import autoAnimate from '@formkit/auto-animate';

	let favorites: Book[];

	favoriteBooks.subscribe((data) => {
		favorites = data?.books ?? [];
	});
</script>

{#if favorites.length == 0}
	<div class="container">
		<div class="text-center mt-5">
			<h2>No favorite books were added yet</h2>
			<p class="lead">Start exploring and add some books to your favorites!</p>
		</div>
	</div>
{:else}
	<div class="container mt-3 bg-light">
		<div class="row" use:autoAnimate>
				{#each favorites as singleBook}
					<ShowBook book={singleBook} />
				{/each}
		</div>
	</div>
{/if}
