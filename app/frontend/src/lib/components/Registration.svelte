<script lang="ts">
	import { containNumbers, passwordMatch, registerMyAccount, relocation } from "$lib/utils/functions";
	import { useForm, Hint, HintGroup, validators, required, minLength, email } from "svelte-use-form";
	import { authResp } from '$lib/utils/stores';	
	import { add_styles } from "svelte/internal";
	
	import { createEventDispatcher } from 'svelte';
	import Logo from '$lib/img/book_heaven_logo.png';

	
	const requiredMessage = "This field is required";

	let first_name = '';
	let last_name = '';
	let age=0;
	let password = '';
	let emailaddress='';
	
	let visible = false;

	function visibile(){ visible = true;}


  const dispatch = createEventDispatcher();

	const form =useForm(); 

	function submitCall() {
	
		registerMyAccount(emailaddress, password, first_name, last_name, age);
		waitforlogin();
		
		
	}

	async function waitforlogin() {
  
  await wait(1000); // Várakozás 2 másodpercig
  dispatch('loginSuccessful');
}
function wait(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

	const navigateToLogin = () => {
    dispatch('navigateToLogin');
  };
	
</script>


	<div class="container py-5 h-100 " >
		<div class="row d-flex justify-content-center align-items-center h-100 ">
			<div class="col-xl-10 ">
			
					<div class="row g-0">
						



						<div class="card-body p-md-5 mx-md-4 ">
							<div class="text-center">

				  <div class="text-center justify-content-center align-items-center text-center">
					<img
									src={Logo}
									style="width: 100px;"
									alt="logo"
								/>
					<h4 class="mt-1 mb-5 pb-1">BOOK Haven</h4>
				  </div>
  
				  <form use:form on:submit|preventDefault={submitCall} >
					<p>Please login to your account</p>
  
					<div class="form-outline mb-4">

						<label class="label" for="first-name">first-Name</label>
					
						<input class="form-control" bind:value={first_name} 	on:change={visibile}>
					</div>
					<div class="form-outline mb-4">
						<label class="label" for="last-name">last-name</label>
					
						<input class="form-control" bind:value={last_name} 	on:change={visibile}>
					</div>
						
					<div class="form-outline mb-4">
						<label class="label" for="email">Email</label>
					  <input type="email"
					  name="email"
					  bind:value={emailaddress}
					  use:validators={[required, email]} id="user" class="form-control"
						placeholder="email address" />
						<HintGroup for="email">
							<Hint on="required">This is a mandatory field</Hint>
							<Hint on="email" hideWhenRequired>Email is not valid</Hint>
						</HintGroup>
					
					</div>	<div class="form-outline mb-4">


						<label  class="label" for="age">Age</label>
						<input class="form-control"  type="number" name="age" bind:value={age} />
	
					</div>	


					<div class="form-outline mb-4">
					<label class="label"for="password">Password</label>
					<input class="form-control" type="password" name="password" bind:value={password} use:validators={[required, minLength(5), containNumbers(2)]} />
					<span class="hintgroup">
					<HintGroup for="password">
						<Hint on="required">{requiredMessage}</Hint>
						<Hint on="minLength" hideWhenRequired let:value>This field must have at least {value} characters.</Hint>	
						<Hint on="containNumbers" hideWhen="minLength" let:value>
							
						This field must contain at least {value} numbers.
						</Hint>	
					</HintGroup>
				</span>
			</div>	
			<div class="form-outline mb-4">
					<label class="label" for="passwordConfirmation">Password Confirmation</label>
					<input class="form-control" type="password" name="passwordConfirmation" use:validators={[required, passwordMatch]} />
					<span class="hintgroup">
					<HintGroup for="passwordConfirmation">
						<Hint on="required">{requiredMessage}</Hint>
						<Hint on="passwordMatch" hideWhenRequired>Passwords do not match</Hint>	
					</HintGroup>
				</span>
			</div>	
  
					<button class="btn btn-primary" type="submit" disabled={!$form.valid} >
						<span > Submit
						</span>
					</button>

					 </form>
					 <br>
				 
				</div>
				<div class="d-flex align-items-center justify-content-center pb-4">
					<p class="mb-0 me-2">Already have one?</p>
					<button class="btn btn-outline-danger" on:click={navigateToLogin}>LogIn</button>
				</div>
			  </div>

			

			</div>
		  </div>
		</div>
	  </div>

			 
		










