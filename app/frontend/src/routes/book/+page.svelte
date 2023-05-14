<script lang="ts">
	import { authResp, selectedBook } from '$lib/utils/stores';
	import type { Book } from 'shared-component/dist/entity/Book';
	import ReviewForm from '$lib/components/reviewForm.svelte';
	import Rating from '$lib/components/rating.svelte';
	import type { AuthResponse } from '$lib/api/backend/authApi';
	
	let resp: AuthResponse;
	authResp.subscribe((value:AuthResponse) => {
		resp = value;
	})

	let book: Book;
	selectedBook.subscribe((value: Book) => {
		book = value;
		console.log(book);
	});

	let clicked = false;
	function addRemoveBookToFavourite(): void {
  		const star = document.getElementById("star") as HTMLElement;
		if (clicked){
			star.style.color =  "#ffffff" ;
			clicked = !clicked;
		} else {
			star.style.color = "#ff6600" ;
			clicked = !clicked;
		}
	}
	
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
						<!-- svelte-ignore a11y-click-events-have-key-events -->
						<i class="fa-solid	fa-star fa-2x m-2 rate	" id="star" on:click={addRemoveBookToFavourite} />
					</div>
				</small>
			</div>
		</div>
		<div class="col-lg-8">
			<h2 class="title">{book.title[0]}{book.title.substring(1).toLowerCase()}</h2>
			<p class="md-2"> <span class="text-gold">{book.author}</span> (author) </p>
			<p class="links">
				{#if book.reviews && book.reviews.length>1} 
				<Rating rating=3/>
				<a href="" class="link-dark md-3">{book.reviews.length} Reviews </a>
				{:else}
				<Rating rating=3/>
				<a href="" class="link-dark md-3">0 Review </a>
				{/if}
				<a href="" class="link-dark md-3"> Sign in to write a review </a>
			</p>
			<p><strong>Description:</strong> {book.description}</p>
			<p><strong>Buy this book on the below links:</strong></p>
			<a href={book.buy_links[0].url} class="buyLink">{book.buy_links[0].name}</a>
			<a href={book.buy_links[1].url} class="buyLink">{book.buy_links[1].name}</a>
			<a href={book.buy_links[2].url} class="buyLink">{book.buy_links[2].name}</a>
			<a href={book.buy_links[3].url} class="buyLink">{book.buy_links[3].name}</a>
			<a href={book.buy_links[4].url} class="buyLink">{book.buy_links[4].name}</a>
		</div>
	</div>
	<ReviewForm bookId={book.primary_isbn10}/>
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
	a{
		box-sizing: border-box;
	}
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

	.rate{
		color: white;
		cursor: pointer;
	}

	.buyLink{
		padding: 3px 10px;
		background-color: #dc3545;
		text-decoration: none;
		transition: font-weight 0.3s ease;
		color: #fff;
		box-sizing: border-box;
		border-radius: 5px;	
	}

	.buyLink:hover{

		padding: 3px 10px;
	
		background-color: #c93040;
		color: #fff;
		text-decoration: none;
	}

</style>
