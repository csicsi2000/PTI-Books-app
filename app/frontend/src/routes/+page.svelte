
<script lang="ts">
    // import the Bootstrap style files
    import 'bootstrap/dist/css/bootstrap.min.css';
    //import booklist component
    import Booklist from '$lib/components/booklist.svelte';

</script>


<!-- main container-->
<div class="container mt-3 bg-light">
    <div class="row">
        <Booklist />
    </div>
</div>
