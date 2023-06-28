<script lang="ts">
	import { authResp, bookFromDatabase, favoriteBooks, selectedBook } from '$lib/utils/stores';
	import { getBook } from '$lib/api/backend/bookApi';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	import type { Book } from 'shared-component/dist/entity/Book';
	import type { AuthResponse } from '$lib/api/backend/authApi';
	import type { PageData } from './$types';

	import ReviewForm from '$lib/components/reviewForm.svelte';
	import Rating from '$lib/components/rating.svelte';
	import type { BuyLink } from 'shared-component/dist/entity/BuyLink';
	import autoAnimate from '@formkit/auto-animate';
	import { deleteBookFromList, insertBookIntoList } from '$lib/api/backend/booklistApi';
	import { updateFavoriteBooks } from '$lib/utils/functions';

	export let data: PageData;

	let resp: AuthResponse;
	let isbn13: string;
	let book: Book | undefined;
	let buyLinks: BuyLink[] = [];
	let rating: number = 0;
	let bookReviewNumber: number;

	authResp.subscribe((value) => {
		resp = value as AuthResponse;
	});

	page.subscribe((value) => {
		isbn13 = value.params.id;
		findBook(isbn13).then(() => loadData());
	});

	async function findBook(isbn13Code: string) {
		console.log('Find book');
		if (!book) {
			const allBooks = data.results.lists.flatMap((list: { books: any }) => list.books) as Book[];
			book = allBooks.find((x) => x.primary_isbn13 === isbn13Code);
			console.error('Non present book.');
		}
	}

	selectedBook.subscribe((value) =>{
		loadData();
	})
	async function loadData() {
		try {
			let dataBook = await getBook(isbn13);

			bookReviewNumber = dataBook?.reviews?.length ?? 0;
			console.log(dataBook);
			buyLinks = book?.buy_links ?? [];
			console.log('BuyLinks: ' + buyLinks.length);
			rating = Math.ceil(
				(dataBook as Book).reviews?.reduce((acc, review) => acc + review.rating, 0) /
					bookReviewNumber
			);
		} catch (error: any) {
			bookReviewNumber = 0;
			rating = 0;
			console.log('ERROR: ' + error.message);
		}
	}

	onMount(() => {
		if (book != null) {
			loadData();
		}
		console.log(book);
	});

	let clicked = false;

	function TriggerFavorite() {
		try {
			let defBook = book as Book;
			if (isfavorite) {
				deleteBookFromList(resp.user.id, bookInFavorite.id);
			} else {
				insertBookIntoList(resp.user.id, defBook);
			}
			IsFavorite(defBook);
		} catch {}
		updateFavoriteBooks();
	}

	let isfavorite: Boolean;
	let bookInFavorite: Book;

	let favoriteList: Book[];
	favoriteBooks.subscribe((data) => {
		favoriteList = data?.books ?? [];
	});

	IsFavorite(book as Book);
	function IsFavorite(book: Book) {
		bookInFavorite = favoriteList.find((x) => x.title == book.title) as Book;
		if (bookInFavorite == undefined || bookInFavorite == null) {
			isfavorite = false;
			return;
		}
		isfavorite = true;
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
						<!-- svelte-ignore a11y-click-events-have-key-events -->
						<div on:click={TriggerFavorite}>
							{#if isfavorite}
								<i class="fa-solid fa-star fa-2x m-2" style="color: #ff8000;" />
							{:else}
								<i class="fa-solid fa-star fa-2x m-2" />
							{/if}
						</div>
					</small>
				</div>
			</div>
			<div class="col-lg-8">
				<h2 class="title">{book.title[0]}{book.title.substring(1).toLowerCase()}</h2>
				<p class="md-2"><span class="text-gold">{book.author}</span> (author)</p>
				<p class="links">
					{#if bookReviewNumber == 0}
						<p class="link-dark md-3">No Reviews yet</p>
					{:else if bookReviewNumber > 1}
						<Rating {rating} />
						<p class="link-dark md-3">{bookReviewNumber} reviews</p>
					{:else}
						<Rating {rating} />
						<p class="link-dark md-3">{bookReviewNumber} review</p>
					{/if}
				</p>
				<p class="link-dark md-3">Sign in to write a review</p>
				<p><strong>Description:</strong> {book.description}</p>
				<p><strong>Buy this book on the below links:</strong></p>
				{#each buyLinks as blink}
					<a href={blink.url} class="buyLink m-1">{blink.name}</a>
				{/each}
			</div>
		</div>
		<ReviewForm bookToReview={book} />
	</div>
{/if}
<!-- Modal -->
{#if book && book?.book_image}
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
{/if}

<style>
	a {
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
		font-family: 'New Baskerville', Baskerville, serif;
		font-weight: 500;
		color: #000;
		font-size: 3em;
	}

	.rate {
		color: white;
		cursor: pointer;
	}

	.buyLink {
		padding: 3px 10px;
		background-color: #dc3545;
		text-decoration: none;
		transition: font-weight 0.3s ease;
		color: #fff;
		box-sizing: border-box;
		border-radius: 5px;
	}

	.buyLink:hover {
		padding: 3px 10px;

		background-color: #c93040;
		color: #fff;
		text-decoration: none;
	}
</style>
