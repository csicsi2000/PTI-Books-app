<script lang="ts">
	export let rating:number;
    
        
	let loopCount = 5;
	let loopArray = Array.from({ length: loopCount - rating }, (_, i) => i);
	let ratingArray = Array.from({ length: rating }, (_, i) => i);


</script>

	<spam class="rating">
		{#each ratingArray as i}
			<i class="fa fa-star rating-color" />
		{/each}
		{#each loopArray as i}
			<i class="fa fa-star" />
		{/each}
    </spam>


    <style>
        .rating{
            margin-right: 10px;
        }
        .rating i{
            margin-right: 2px;
        }
        .rating-color{
            color: rgb(255, 102, 0);
        }
    </style>
