<script lang="ts">
	import type { AuthResponse } from '$lib/api/backend/authApi';
	import { authResp, selectedBook } from '$lib/utils/stores';
	import Reviews from './review.svelte';
	import type { Review } from 'shared-component/dist/entity/Review';
	import type { Book } from 'shared-component/dist/entity/Book';
	import { submitMyReview } from '$lib/utils/functions';
	import { getBook } from '$lib/api/backend/bookApi';

	export let bookToReview: Book;

	let reviewTitle: string;
	let review: string;
	let reviewRating = 0;
	let userId: string;
	authResp.subscribe((value) => {
		if (value != null) {
			userId = value.user.id.toString();
		}
	});

	let bookReviews: Review[] = [];
	updatedBookReviews(bookToReview);

	function updatedBookReviews(aBook: Book) {
		if (aBook) {
			getBook(aBook.primary_isbn13)
				.then((book) => {
					bookReviews = book.reviews ?? [];
					selectedBook.set(book);
					console.log('Updated');
				})
				.catch((error) => {
					console.error(`Error getting book review: ${error.message}`);
				});
		}
	}

	function setRating(id: number) {
		for (let index = 1; index <= id; index++) {
			let element = document.getElementById(index.toString());
			if (element) {
				element.style.color = 'rgb(255, 102, 0)';
			}
		}

		if (id < 5) {
			for (let index = id + 1; index <= 5; index++) {
				let element = document.getElementById(index.toString());
				if (element) {
					element.style.color = 'rgb(33, 37, 41)';
				}
			}
		}

		reviewRating = id;
	}

	function handleSubmit(event: Event) {
		event.preventDefault();
	}

	async function submitReview() {
		if (reviewRating < 1) {
			reviewRating = 1;
		}
		await submitMyReview(reviewTitle, review, userId, bookToReview, reviewRating);
		reviewTitle = '';
		review = '';
		reviewRating = 0;
		updatedBookReviews(bookToReview);
	}
</script>

{#key bookReviews}
	<Reviews {bookReviews} />
{/key}

{#if Number(userId) > 0}
	<form class="row g-3 mt-3 mb-3" on:submit|preventDefault={handleSubmit}>
		<div class="col-4">
			<label for="inputReviewTitle" />
			<input
				type="text"
				class="form-control"
				id="inputReviewTitle"
				placeholder="Review title"
				bind:value={reviewTitle}
			/>
		</div>
		<div class="form-floating col-12">
			<textarea
				class="form-control"
				placeholder="Leave a comment here"
				id="floatingTextarea"
				style="height: 80px"
				bind:value={review}
			/>
			<label for="floatingTextarea">Review</label>
		</div>
		<span>
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<i
				class="fa fa-star rating"
				id="1"
				on:click={() => {
					setRating(1);
				}}
			/>
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<i
				class="fa fa-star rating"
				id="2"
				on:click={() => {
					setRating(2);
				}}
			/>
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<i
				class="fa fa-star rating"
				id="3"
				on:click={() => {
					setRating(3);
				}}
			/>
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<i
				class="fa fa-star rating"
				id="4"
				on:click={() => {
					setRating(4);
				}}
			/>
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<i
				class="fa fa-star rating"
				id="5"
				on:click={() => {
					setRating(5);
				}}
			/>
		</span>
		<div class="col-12">
			<button class="btn btn-danger" id="reviewSubmit" type="submit" on:click={submitReview}>
				Submit review
			</button>
		</div>
	</form>
{/if}

<style>
	.rating {
		cursor: pointer;
	}
</style>
