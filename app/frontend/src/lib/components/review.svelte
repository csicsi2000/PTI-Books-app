<script lang="ts">
	import type { Book } from "shared-component/dist/entity/Book";
	import Rating from "./rating.svelte";
	import { getBook } from "$lib/api/backend/bookApi";
	import type { Review } from "shared-component/dist/entity/Review";
    export let bookisbn13:string;

    let bookReviews: Review[] = [];


    getBook(bookisbn13)
        .then((book) => {
            bookReviews = book.reviews;
        })
        .catch((error) => {
            console.error(`Error betting book review: ${error.message}`);
        });
</script>

{#each bookReviews as breview}
<div class="card mt-4">
    <div class="card-body">
        {@html (breview.comment)}
        <h6 class="card-subtitle mb-2 text-muted">{breview.user.email}<span class="ms-4">{breview.date}</span></h6>
        <Rating rating={breview.rating}  />
    </div>
</div>
{/each}