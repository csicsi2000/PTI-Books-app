<script lang="ts">
	export let rating: number;

	let loopCount = 5;
    console.log("Rating: " + rating);
</script>

<div class="rating column">
	{#each Array(loopCount) as _, i}
		{#if i > rating-1}
            <i class="fa-solid fa-star"></i>
		{:else}
            <i class="fa-solid fa-star" style="color: #ff8000;"></i>
		{/if}
	{/each}
</div>

<style>
	.rating {
		margin-right: 10px;
	}
	.rating i {
		margin-right: 2px;
	}
	.rating-color {
		color: rgb(255, 102, 0);
	}
</style>
