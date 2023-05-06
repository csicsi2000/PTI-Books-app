<script lang="ts">
	import StarSvg from '$lib/img/star4.svg';
	import { allBooks, selectedBook } from '$lib/utils/stores';
	import type { Book } from 'shared-component/dist/entity/Book';

	// Initialize an empty array of Book objects
	let books: Book[] = [];
	
	allBooks.subscribe((value: Book[]) => {
		books = value;
	});


</script>



{#each books as book}
	<!-- Render each book as a card using Bootstrap -->
	<div class="col mt-3 mb-3 d-flex justify-content-center">
		<div class="card book" style="width: 16rem;">
			<a href="/book">
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<img on:click={()=>{
				console.log(book);
				selectedBook.set(book);
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
