<script lang="ts">
	import { selectedBook } from "$lib/utils/stores";
	import Rating from "./rating.svelte";
    function clicked(){
        alert("Clicked");
    }
</script>



<form class="row g-3 mt-3 mb-3  ">
    <div class="col-4 ">
      <label for="inputReviewTitle"></label>
      <input type="text" class="form-control" id="inputReviewTitle" placeholder="Review title">
    </div>    
    <div class="form-floating col-12">
        <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea" style="height: 80px">

        </textarea>
        <label for="floatingTextarea">Review</label>
    </div>
    <spam class="rating">
		<i class="fa fa-star" />
		<i class="fa fa-star" />
        <i class="fa fa-star" />
        <i class="fa fa-star" />
        <i class="fa fa-star" />
    </spam>
    <div class="col-12">
        <button class="btn btn-danger" id="reviewSubmit" type="submit">Submit review</button>
    </div>        
</form>