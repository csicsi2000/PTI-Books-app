<script lang="ts">
    // import the Bootstrap style files
    import 'bootstrap/dist/css/bootstrap.min.css';
    // import of Nav_bar
    import Nav from './nav.svelte';
    
    //import book component
    import Book from './book.svelte';


    const bookList = new Array(10).fill(0);

</script>

<!--Nav bar on the top of the page-->
<Nav />
<!-- main container-->
<div class="container mt-3 bg-light">
    <div class="row">
        <Book />
    </div>
</div>
