<script lang="ts">
	import { selectedBook } from '$lib/utils/stores';
	import type { Book } from 'shared-component/dist/entity/Book';
	import star2 from '$lib/img/star4.svg';

	let book: Book;
	selectedBook.subscribe((value: Book) => {
		book = value;
		console.log(book);
	});
	
</script>

{#if book}
<div class="container mt-5 bg-light">
	<div class="row">
		<div class="col-lg-4">
			<div class="card d-flex flex-column position-relative" style="width: 16rem;">
				<img
					data-bs-toggle="modal"
					data-bs-target="#staticBackdrop"
					class="card-img-top bookImg"
					style="width: 16rem; height: 362px"
					src={book.book_image}
					alt={book.title}
				/>

				<small class="d-flex align-items-center position-absolute bottom-0 end-0">
					<div>
						<img src={star2} width="20px" alt="star" class="m-2" />
					</div>
				</small>
			</div>
		</div>
		<div class="col-lg-8">
			<h2 class="title">{book.title[0]}{book.title.substring(1).toLowerCase()}</h2>
			<p class="md-2"> <span class="text-gold">{book.author}</span> (author) </p>
			<p class="links">
				{#if book.reviews && book.reviews.length>1}
				<a href="" class="link-dark md-3">{book.reviews.length} Reviews </a>
				{:else}
				<a href="" class="link-dark md-3">0 Review </a>
				{/if}
				<a href="" class="link-dark md-3"> Sign in to write a review </a>
			</p>
			<p><strong>Description:</strong> {book.description}</p>
		</div>
	</div>
	<div class="form-floating mt-3 mb-3 col-12">
		<textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea" style="height: 80px"></textarea>
		<label for="floatingTextarea">Review</label>
	</div>
	<div class="col-12">
		<button class="btn btn-danger" type="submit">Submit review</button>
	  </div>
</div>
{/if}
<!-- Modal -->
<div
	class="modal fade"
	id="staticBackdrop"
	data-bs-backdrop="static"
	data-bs-keyboard="false"
	tabindex="-1"
	aria-labelledby="staticBackdropLabel"
	aria-hidden="true"
>
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" />
			</div>
			<div class="modal-body text-center">
				<img
					class="card-img-top img-fluid mx-auto"
					style="width: 80%; height: auto"
					src={book.book_image}
					alt={book.title}
				/>
			</div>
		</div>
	</div>
</div>

<style>
	.bookImg:hover {
		cursor: pointer;
	}

	.text-gold {
    	color: #9e866b;
		font-weight: bold;
		font-size: larger;
	}

	.title {
    font-family: 'New Baskerville',Baskerville,serif;
    font-weight: 500;
    color: #000;
    font-size:3em
	}

	.links a{
		margin-right: 10px;
	}
</style>
