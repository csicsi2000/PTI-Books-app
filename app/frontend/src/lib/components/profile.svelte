<script lang="ts">
	import { authResp } from '$lib/utils/stores';

	import { containNumbers, passwordMatch, registerMyAccount } from "$lib/utils/function";
	import { useForm, Hint, HintGroup, validators, required, minLength, email } from "svelte-use-form";
  
 	import type { AuthResponse } from '$lib/api/backend/authApi';
	import type { User } from 'shared-component/dist/entity/User';
	import { get } from 'svelte/store';

	let user: User;

//   authResp.subscribe((value: AuthResponse)=>{
//   user=value.user;
//   })

let first_name = ""
			let last_name =  ""
			let age= 0
			let emailaddress= ""
			let password =  ""
		 try {
			
			let first_name = get(authResp).user.firstName;
			let last_name =  get(authResp).user.lastName;
			let age= get(authResp).user.age;
			let emailaddress= get(authResp).user.email;
			let password =  get(authResp).user.firstName;
		 } catch (error) {
			alert(error);

		 }
      







  let example = get(authResp)



	let FavBooks = [{}];

	//let user=authResp;
 // alert(`Logged in with  ${authResp}`);





	const form =useForm(); 

	function update() {
		first_name = "authResp."
		last_name = "user.last_name;"
		
	}

	function remove() {
		
	}


</script>



<section class="vh-100" style="background-color: #eee;">
	<div class="container py-5 h-100">
	  <div class="row d-flex justify-content-center align-items-center h-100">
		<div class="col-md-12 col-xl-4">
  
		  <div class="card" style="border-radius: 15px;">
			<div class="card-body text-center">
				<h4 class="mb-2">name</h4>
				<div class=".col-4">
					<label  class="mb-2" for="first-name">{first_name}</label>
				</div>
				<div class=".col-4">
					<input  class="mb-2" bind:value={first_name} />
				</div>
				<div class=".col-4">
					<label class="mb-2"for="last-name">{last_name}</label>
				</div>	
				<div class=".col-4">
					<input  class="mb-2" bind:value={last_name} />
				</div>
				<h4 class="mb-2">age</h4>
				<div class=".col-4">
					<label class="mb-2"for="age">{age}</label>
				</div>	
				<div class=".col-4">
					<input  class="mb-2" bind:value={age} />
				</div>

			  <h4 class="mb-2">Julie L. Arsenault</h4>
			  <p class="text-muted mb-4">@Programmer <span class="mx-2">|</span> <a
				  href="#!">mdbootstrap.com</a></p>
			  <div class="mb-4 pb-2">
				<button type="button" class="btn btn-outline-primary btn-floating">
				  <i class="fab fa-facebook-f fa-lg"></i>
				</button>
				<button type="button" class="btn btn-outline-primary btn-floating">
				  <i class="fab fa-twitter fa-lg"></i>
				</button>
				<button type="button" class="btn btn-outline-primary btn-floating">
				  <i class="fab fa-skype fa-lg"></i>
				</button>
			  </div>
			  <button type="button" class="btn btn-primary btn-rounded btn-lg">
				Message now
			  </button>
			  <div class="d-flex justify-content-between text-center mt-5 mb-2">
				<div>
				  <p class="mb-2 h5">8471</p>
				  <p class="text-muted mb-0">Wallets Balance</p>
				</div>
				<div class="px-3">
				  <p class="mb-2 h5">8512</p>
				  <p class="text-muted mb-0">Income amounts</p>
				</div>
				<div>
				  <p class="mb-2 h5">4751</p>
				  <p class="text-muted mb-0">Total Transactions</p>
				</div>
			  </div>
			</div>
		  </div>
  
		</div>
	  </div>
	</div>
  </section>





<!-- <div >

<label class="label"for="password">Name</label>
<label><input class="input" bind:value={first} placeholder={first}></label>
<label><input class="input" bind:value={last} placeholder={last}></label>

<label class="label"for="password">Email</label>
<label><input class="input" bind:value={first} placeholder={first}></label>

<div class='buttons'>
	
	<button class="btn" on:click={update} >Edit</button>
	<button class="btn" on:click={remove} >delete</button>
</div>
</div> -->

<!-- <head>
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
		integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
		crossorigin="anonymous"
	/>
</head>

<style>
	.btn {
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
			'Open Sans', 'Helvetica Neue', sans-serif;
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
		box-shadow: inset 8px 8px 8px #cbced1, inset -8px -8px 8px #ffffff;
		border-radius: 25px;
	}

	.input::placeholder {
		color: #555;
		transition: all 0.3s ease;
	}

	.input:focus::placeholder {
		color: #999;
	}

	.container {
		display: flex;
		flex-direction: column;
		height: 100%;
		justify-content: center;
		align-items: center;
		position: relative;
		overflow: hidden;
		flex-wrap: wrap;
	}

	.book {
		position: relative;
		border-radius: 10px;
		width: 220px;
		height: 300px;
		background-color: whitesmoke;
		-webkit-box-shadow: 1px 1px 12px #000;
		box-shadow: 1px 1px 12px #000;
		-webkit-transform: preserve-3d;
		-ms-transform: preserve-3d;
		transform: preserve-3d;
		-webkit-perspective: 2000px;
		perspective: 2000px;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		justify-content: center;
		color: #000;
	}

	.cover {
		top: 0;
		position: absolute;
		background-color: lightgray;
		width: 100%;
		height: 100%;
		border-radius: 10px;
		cursor: pointer;
		-webkit-transition: all 0.5s;
		transition: all 0.5s;
		-webkit-transform-origin: 0;
		-ms-transform-origin: 0;
		transform-origin: 0;
		-webkit-box-shadow: 1px 1px 12px #000;
		box-shadow: 1px 1px 12px #000;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		justify-content: center;
	}

	.book:hover .cover {
		-webkit-transition: all 0.5s;
		transition: all 0.5s;
		-webkit-transform: rotatey(-80deg);
		-ms-transform: rotatey(-80deg);
		transform: rotatey(-80deg);
	}

	p {
		font-size: 20px;
		font-weight: bolder;
	}
</style> -->
