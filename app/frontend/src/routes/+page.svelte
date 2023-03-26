
<script lang="ts">
    // import the Bootstrap style files
    import 'bootstrap/dist/css/bootstrap.min.css';
    // import of Nav_bar
    import Nav from '../lib/components/nav.svelte';
    
    //import book component
    import Book from '../lib/components/book.svelte';

</script>

<!--Nav bar on the top of the page-->
<Nav />
<!-- main container-->
<div class="container mt-3 bg-light">
    <div class="row">
        <Book />
    </div>
</div>
