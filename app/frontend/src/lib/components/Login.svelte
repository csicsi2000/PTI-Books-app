<script lang="ts">
	import { containNumbers, loginToMyAccount, relocation } from '$lib/utils/functions';
	import {
		useForm,
		validators,
		required,
		minLength,
		email,
		HintGroup,
		Hint
	} from 'svelte-use-form';
	import { authResp } from '$lib/utils/stores';

	import { add_styles } from 'svelte/internal';
	import { isLoggedIn } from '$lib/api/backend/authApi';
	import Logo from '$lib/img/book_heaven_logo.png';
	//relocation("/Profile");


	import { createEventDispatcher } from 'svelte';
  
  const dispatch = createEventDispatcher();


	async function submitCall(event:Event) {
		event.preventDefault();
		//console.log('egyből');
		await loginToMyAccount(emailaddress, password);

		if (isLoggedIn()) {
			console.log("Logged in");
			dispatch('loginSuccessful');
			//relocation('/Profile');
		}
		console.log($authResp);
	}
	const navigateToRegistration = () => {
    dispatch('navigateToRegistration');
  };

	let password = '';
	let emailaddress = '';
	let visible = false;

	function visibile() {
		visible = true;
	}

	const form = useForm();
</script>


		<div class="row d-flex justify-content-center align-items-center h-100">
			<div class="col-xl-10">
			
					<div class="row g-0">
						<div class="card-body p-md-5 mx-md-4">
							<div class="text-center">
								<img
									src={Logo}
									style="width: 100px;"
									alt="logo"
								/>
								<h4 class="mt-1 mb-5 pb-1">BOOK Haven</h4>
							</div>

							<form use:form on:submit|preventDefault={submitCall}>
								<p>Please login to your account</p>

								<div class="form-outline mb-4">
									<input
										type="email"
										name="email"
										bind:value={emailaddress}
										use:validators={[required, email]}
										id="form2Example11"
										class="form-control"
										placeholder="email address"
									/>
									<HintGroup for="email">
										<Hint on="required">This is a mandatory field</Hint>
										<Hint on="email" hideWhenRequired>Email is not valid</Hint>
									</HintGroup>

									<label class="form-label" for="form2Example11">Username</label>
								</div>

								<div class="form-outline mb-4">
									<input
										type="password"
										name="password"
										bind:value={password}
										use:validators={[required]}
										id="form2Example22"
										class="form-control"
									/>
									<span class="hintgroup">
										<Hint for="password" on="required">This is a mandatory field</Hint>
									</span>
									<label class="form-label" for="form2Example22">Password</label>
								</div>

								<div class="text-center pt-1 mb-5 pb-1">
									<button
										class="btn btn-primary btn-block gradient-custom-2 mb-3"
										type="submit"
										disabled={!$form.valid}>Log in</button
									>
								</div>
							</form>
							<div class="d-flex align-items-center justify-content-center pb-4">
								<p class="mb-0 me-2">Create new account</p>
								<button class="btn btn-outline-danger" on:click={navigateToRegistration}>SignIn</button>
							</div>
						</div>
					</div>
				
			</div>
		</div>


