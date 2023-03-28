<script lang="ts">
	import type { Book } from '$lib/types/new-york-times-book/fullOverview';
	import StarSvg from "$lib/img/star.svg";

	// Initialize an empty array of Book objects
	export let books: Book[] = [];	
		
</script>

{#each books as book}
	<!-- Render each book as a card using Bootstrap -->
	<div class="col mt-3 mb-3 d-flex justify-content-center">
		<div class="card book" style="width: 16rem;">
			<img
				class="card-img-top"
				style="width: 16rem; height: 362px"
				src={book.book_image}
				alt={book.title}
			/>
			<div class="card-body d-flex flex-column">
				<h5 class="card-title">{book.title}</h5>
				<p class="card-text">{book.description}</p>
				<small class="d-flex align-items-center justify-content-between mt-auto">
					<span class="lm-auto"><b>{book.author}</b> </span>
					<div>
						<img src={StarSvg} width="20px" alt="star"/>	
					</div>
					
				</small>
			</div>
		</div>
	</div>
{/each}
