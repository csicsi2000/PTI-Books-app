<script lang="ts">
	import { selectedBook } from "$lib/utils/stores";
	import Rating from "./rating.svelte";
	import Review from "./review.svelte";


    let rating = 0;
    

</script>

<Review />
<form class="row g-3 mt-3 mb-3" action="/book">
    <div class="col-4 ">
      <label for="inputReviewTitle"></label>
      <input type="text" class="form-control" id="inputReviewTitle" placeholder="Review title">
    </div>    
    <div class="form-floating col-12">
        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea" style="height: 80px">

        </textarea>
        <label for="floatingTextarea">Review</label>
    </div>
    <Rating rating={rating} />
   <div class="col-12">
        <button class="btn btn-danger" id="reviewSubmit" type="submit">Submit review</button>
    </div>    
</form>
<style>
    
    
</style>