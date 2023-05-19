<script lang="ts">
	import type { AuthResponse } from '$lib/api/backend/authApi';
	import { authResp, selectedBook } from '$lib/utils/stores';
	import Rating from './rating.svelte';
	import Review from './review.svelte';
	import { postReview } from '$lib/api/backend/bookApi';
	import type { Book } from 'shared-component/dist/entity/Book';

	let reviewTitle: string;
	let review: string;
	let rating = 0;

	let userId: string;
	authResp.subscribe((value: AuthResponse) => {
		if (value != null) {
			userId = value.user.id.toString();
		}
	});

	let bookToReview: Book;
	selectedBook.subscribe((value: Book) => {
		if (value != null) {
			bookToReview = value;
		}
	});


	function setRating(id:number){
		for (let index = 1; index <= id; index++){
			let element = document.getElementById(index.toString());
			if(element){
				element.style.color = "rgb(255, 102, 0)";
			}
		}

		if(id<5) {
			for (let index = id+1; index <= 5; index++){
			let element = document.getElementById(index.toString());
			if(element){
				element.style.color = "rgb(33, 37, 41)";
			}
			
		}	
		}
		


		rating = id;
	}

	function submitMyReview() {
		let reviewToPost =
			"<h5 class='card-title'>" + reviewTitle + '</h5>' + "<p class='card-text'>" + review + '</p>';
		postReview(userId.toString(), bookToReview, reviewToPost, rating)
			.then((string) => {})
			.catch((error) => {
				alert(`Error submitting review`);
			});
	}
</script>

<Review bookisbn13={bookToReview.primary_isbn13} />
{#if Number(userId) > 0}
	<form class="row g-3 mt-3 mb-3" action="/book">
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
		<spam>
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<i class="fa fa-star rating" id="1" on:click={()=>{setRating(1); console.log(rating)}}/>
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<i class="fa fa-star rating" id="2" on:click={()=>{setRating(2); console.log(rating)}}/>
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<i class="fa fa-star rating" id="3" on:click={()=>{setRating(3); console.log(rating)}}/>
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<i class="fa fa-star rating" id="4" on:click={()=>{setRating(4); console.log(rating)}}/>
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<i class="fa fa-star rating" id="5" on:click={()=>{setRating(5); console.log(rating)}}/>
		</spam>
		<div class="col-12">
			<button class="btn btn-danger" id="reviewSubmit" type="submit" on:click={submitMyReview}
				>Submit review</button
			>
		</div>
	</form>
{/if}


<style>
	.rating{
		cursor: pointer;
	}
		
	
</style>