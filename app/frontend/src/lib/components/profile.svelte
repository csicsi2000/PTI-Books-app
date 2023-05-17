
<script>
	import { authResp } from '$lib/utils/stores';


	
	let FavBooks = [{}];
	
	let user=authResp;
  alert(`Logged in with  ${authResp}`);
	let prefix = '';
	let first = '';
	let last = '';
	let age = 0;




  

	

	

	function update() {
		first = "authResp."
		last = "user.last_name;"
		
	}

	function remove() {
		
	}


</script>





<div>


<label class="label"for="password">Name</label>
<label><input class="input" bind:value={first} placeholder={first}></label>



<label><input class="input" bind:value={last} placeholder={last}></label>

<div class='buttons'>
	
	<button class="btn" on:click={update} >Edit</button>
	<button class="btn" on:click={remove} >delete</button>
</div>

</div>


<style>
	




	.btn {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: white;
  font-size: 18px;
  background-color: rgba(13, 13, 13, 0.3);
  padding: 0.4em 1.2em;
  border-style: dashed;
  border-radius: 0.25em;
  border-width: 2px;
  border-color: rgba(13, 13, 13, 0.75);
  transition: 0.2s ease;
}

.btn:hover {
  background-color: rgb(255, 255, 255);
  color: #0d0d0d;
  border-color: #0d0d0d;
}
.input {
  max-width: 190px;
  border: none;
  outline: none;
  background: none;
  font-size: 18px;
  color: #555;
  padding: 15px 5px 10px 20px;
  box-shadow: inset 8px 8px 8px #cbced1,
              inset -8px -8px 8px #ffffff;
  border-radius: 25px;
}

.input::placeholder {
  color: #555;
  transition: all 0.3s ease;
}

.input:focus::placeholder {
  color: #999;
}


div{
	
  display:flex;
  flex-direction:column;
  height:100%;
  justify-content:center;
  align-items:center;
  position:relative;
  overflow:hidden;
  flex-wrap:wrap;	
}





</style>



