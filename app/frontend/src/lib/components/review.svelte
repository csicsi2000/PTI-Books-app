<script lang="ts">
	import { selectedBook } from "$lib/utils/stores";
</script>


<div class="form-floating mt-3 mb-3 col-12">
    <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea" style="height: 80px"></textarea>
    <label for="floatingTextarea">Review</label>
</div>
<div class="col-12">
    <button class="btn btn-danger" type="submit">Submit review</button>
</div>