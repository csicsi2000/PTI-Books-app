<script lang="ts">
	import type { Book } from '$lib/types/new-york-times-book/fullOverview';
	import StarSvg from '$lib/img/star.svg';
	import { selectedBook } from '$lib/utils/stores';


	// Initialize an empty array of Book objects
	export let books: Book[] = [];
	let clickedBook:Book;
	

</script>



{#each books as book}
	<!-- Render each book as a card using Bootstrap -->
	<div class="col mt-3 mb-3 d-flex justify-content-center">
		<div class="card book" style="width: 16rem;">
			<a href="/book">
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<img on:click={()=>{
				clickedBook = book;
				console.log(clickedBook);
				selectedBook.set(clickedBook);
			}}
				class="card-img-top"
				style="width: 16rem; height: 362px"
				src={book.book_image}
				alt={book.title}
			/>
		</a>
			<div class="card-body d-flex flex-column">
				<h5 class="card-title">{book.title}</h5>
				{#if book.description.length > 80}
					<p class="card-text">{book.description.slice(0, 80)}...</p>
				{:else}
					<p class="card-text">{book.description}</p>
				{/if}
				<small class="d-flex align-items-center justify-content-between mt-auto">
					<span class="lm-auto"><b>{book.author}</b> </span>
					<div>
						<img src={StarSvg} width="20px" alt="star" />
					</div>
				</small>
			</div>
		</div>
	</div>
{/each}
