<script lang="ts">
	import { authResp, booklist_name, favoriteBooks } from '$lib/utils/stores';
	import type { Book } from 'shared-component/dist/entity/Book';
	import ShowBook from '$lib/components/showBook.svelte';
	import autoAnimate from '@formkit/auto-animate';

	let favorites: Book[];

	favoriteBooks.subscribe((data) => {
		favorites = data?.books ?? [];
	});

	let simplifiedView = false;
</script>

<div class="d-flex align-items-center justify-content-center">
	<div class="form-check">
		<input
			class="form-check-input"
			type="checkbox"
			bind:checked={simplifiedView}
			id="defaultCheck1"
		/>
		<label class="form-check-label" for="defaultCheck1">Simplified View</label>
	</div>
</div>
{#if favorites.length == 0}
	<div class="container">
		<div class="text-center mt-5">
			<h2>No favorite books were added yet</h2>
			<p class="lead">Start exploring and add some books to your favorites!</p>
		</div>
	</div>
{:else}
	<div class="container mt-3 bg-light" use:autoAnimate>
		{#if simplifiedView}
			<div class="list-group" use:autoAnimate>
				{#each favorites as singleBook (singleBook)}
					<a
						class="list-group-item list-group-item-action"
						href="/book/{singleBook.primary_isbn13}"
					>
						{singleBook.title}
					</a>
				{/each}
			</div>
		{:else}
			<ul class="row list-unstyled" use:autoAnimate>
				{#each favorites as singleBook (singleBook)}
					<li class="col-12 col-md-6 col-lg-4">
						<ShowBook book={singleBook} />
					</li>
				{/each}
			</ul>
		{/if}
	</div>
{/if}
