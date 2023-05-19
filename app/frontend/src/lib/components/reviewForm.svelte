<script lang="ts">
	import type { AuthResponse } from '$lib/api/backend/authApi';
	import { authResp, selectedBook } from '$lib/utils/stores';
	import Rating from './rating.svelte';
	import Review from './review.svelte';
	import { postReview } from '$lib/api/backend/bookApi';
	import type { Book } from 'shared-component/dist/entity/Book';


    let reviewTitle:string;
    let review:string;

	let userId: string;
	authResp.subscribe((value: AuthResponse) => {
		if(value != null)
		{
			userId = value.user.id.toString();
		}
	});

	let bookToReview: Book;
	selectedBook.subscribe((value: Book) => {
		if(value != null)
		{
			bookToReview = value;
		}
	});

    let rating = 0;

	function submitMyReview() {
        let reviewToPost = 
            "<h5 class='card-title'>" + reviewTitle + "</h5>" + 
            "<p class='card-text'>" + review + "</p>";
		postReview(userId.toString(), bookToReview, reviewToPost, 5)
			.then((string) => {
				
			})
			.catch((error) => {
				alert(`Error submitting review`);
			});
	}
</script>

<Review bookisbn13={bookToReview.primary_isbn13} />
{#if Number(userId) >0}
<form class="row g-3 mt-3 mb-3" action="/book">
	<div class="col-4">
		<label for="inputReviewTitle" />
		<input type="text" class="form-control" id="inputReviewTitle" placeholder="Review title" bind:value={reviewTitle}/>
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
	<Rating {rating} />
	<div class="col-12">
		<button
			class="btn btn-danger"
			id="reviewSubmit"
			type="submit"
			on:click={submitMyReview}>Submit review</button
		>
	</div>
</form>
{/if}
<style>
</style>
