<script lang="ts">
	import { containNumbers, passwordMatch, registerMyAccount, relocation } from "$lib/utils/functions";
	import { useForm, Hint, HintGroup, validators, required, minLength, email } from "svelte-use-form";
	import { authResp } from '$lib/utils/stores';	
	import { add_styles } from "svelte/internal";
	
	
	
	const requiredMessage = "This field is required";

	let first_name = '';
	let last_name = '';
	let age=0;
	let password = '';
	let emailaddress='';
	
	let visible = false;

	function visibile(){ visible = true;}


	const form =useForm(); 

	function submitCall() {
		//console.log('egyből');
		registerMyAccount(emailaddress, password, first_name, last_name, age)
		relocation("/Profile");
	}
	
</script>

<div>

	
			 
			  
			  
				<form use:form on:submit|preventDefault={submitCall} >
					<card class="container">
					<h1>
						Registration
					</h1>
					<label class="label" for="first-name">first-Name</label>
					
					<input class="input" bind:value={first_name} 	on:change={visibile}>

					<label class="label" for="last-name">last-name</label>
					
					<input class="input" bind:value={last_name} 	on:change={visibile}>

					<label  class="label" for="age">Age</label>
					<input class="input"  type="number" name="age" bind:value={age} />


					<label class="label" for="email">Email</label>
					<input class="input" type="email" name="email"  bind:value={emailaddress} use:validators={[required, email]} />
					<span class="hintgroup">
					<HintGroup   for="email">
						<Hint on="required">{requiredMessage}</Hint>
						<Hint on="email" hideWhenRequired>This must be a valid email</Hint>	
					</HintGroup>
					</span>
					<label class="label"for="password">Password</label>
					<input class="input" type="password" name="password" bind:value={password} use:validators={[required, minLength(5), containNumbers(2)]} />
					<span class="hintgroup">
					<HintGroup for="password">
						<Hint on="required">{requiredMessage}</Hint>
						<Hint on="minLength" hideWhenRequired let:value>This field must have at least {value} characters.</Hint>	
						<Hint on="containNumbers" hideWhen="minLength" let:value>
							
						This field must contain at least {value} numbers.
						</Hint>	
					</HintGroup>
				</span>
				
					<label class="label" for="passwordConfirmation">Password Confirmation</label>
					<input class="input" type="password" name="passwordConfirmation" use:validators={[required, passwordMatch]} />
					<span class="hintgroup">
					<HintGroup for="passwordConfirmation">
						<Hint on="required">{requiredMessage}</Hint>
						<Hint on="passwordMatch" hideWhenRequired>Passwords do not match</Hint>	
					</HintGroup>
				</span><br />
					<button type="submit" disabled={!$form.valid} >
						<span class="button_top"> Submit
						</span>
					</button>
					</card>
					</form>
					   
			
		

	
				</div>