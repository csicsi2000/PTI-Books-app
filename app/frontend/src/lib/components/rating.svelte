<script lang="ts">
	export let rating: number;

	let loopCount = 5;
	let loopArray = Array.from({ length: loopCount - rating }, (_, i) => i);
	let ratingArray = Array.from({ length: rating }, (_, i) => i);
</script>

<div class="rating column">
	{#each Array(loopCount) as _, i}
		{#if i > rating-1}
			<i class="fa fa-star" />
		{:else}
			<i class="fa fa-star rating-color" />
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
