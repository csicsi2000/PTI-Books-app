<script lang="ts">
	import { authResp } from '$lib/utils/stores';

	import { containNumbers, passwordMatch, registerMyAccount, relocation, removeMyAccount, updateMyAccount } from '$lib/utils/functions';
	import {
		useForm,
		Hint,
		HintGroup,
		validators,
		required,
		minLength,
		email
	} from 'svelte-use-form';
	import { fade, scale } from 'svelte/transition';

	import type { AuthResponse } from '$lib/api/backend/authApi';
	import type { User } from 'shared-component/dist/entity/User';
	import { get } from 'svelte/store';

	//   authResp.subscribe((value: AuthResponse)=>{
	//   user=value.user;

	//   })let first_name = get(authResp).user.firstName;

	let authRespValue = get(authResp);
	console.log("test");
	console.log(authRespValue);
	let first_name = authRespValue.user.firstName;
	let last_name = authRespValue.user.lastName;
	let age = authRespValue.user.age;
	let emailaddress = '';
	let password = '';

	// window.onload = () => {
	// 	alert('get(authResp).user.lastName');
	// 	if (authResp != null) {
	// 		let first_name = authRespValue.user.firstName;
	// 		last_name = authRespValue.user.lastName;
	// 		age = authRespValue.user.age;
	// 		emailaddress = authRespValue.user.email;
	// 		password = authRespValue.user.firstName;
	// 	}
	// };

	let reload = true;
	let reload2 = false;

	let EditButtonClass = 'btn hide btn-secondary btn-floating';
	let EditButtonIClass = 'fa-sharp fa-regular fa-pen-to-square';
	let EditButtonName = 'edit';

	let CheckButtonClass = 'btn btn-outline-success btn-floating';
	let CheckButtonIClass = 'fa-sharp fa-solid fa-check';
	let CHeckButtonName = 'Check';

	let ButtonClass = EditButtonClass;
	let ButtonIClass = EditButtonIClass;
	let ButtonName = EditButtonName;

	let example = get(authResp);

	let FavBooks = [{}];

	//let user=authResp;
	// alert(`Logged in with  ${authResp}`);

	function buttonCHanger() {
		if (ButtonName === EditButtonName) {
			ButtonName = CHeckButtonName;
			ButtonClass = CheckButtonClass;
			ButtonIClass = CheckButtonIClass;
		} else {
			ButtonName = EditButtonName;
			ButtonClass = EditButtonClass;
			ButtonIClass = EditButtonIClass;
		}
		reload2 = !reload2;
		reload = !reload;
	}

	const form = useForm();

	function update() {
		
	 	updateMyAccount(authRespValue.user.id.toString(), first_name, last_name, age,authRespValue.user.email,authRespValue.user.password);
	}

	function remove() {
		
	 	removeMyAccount(authRespValue.user.id.toString());
		relocation('/');
	}
</script>

<section class="vh-100" style="background-color: #eee;">
	<div class="container py-5 h-100">
		<div class="row d-flex justify-content-center align-items-center h-100">
			<div class="col-md-12 col-xl-4">
				<div class="card" style="border-radius: 15px;">
					<div class="card-body text-center">
						{#if ButtonName == EditButtonName}
							<div in:fade>
								<h4 class="mb-2">name</h4>
								<div class=".col-4">
									<label class="mb-2" for="first-name">{first_name}</label>
							
									<label class="mb-2" for="last-name">{last_name}</label>
								</div>

								<h4 class="mb-2">age</h4>
								<div class=".col-4">
									<label class="mb-2" for="age">{age}</label>
								</div>
							</div>
						{/if}

						{#if ButtonName == CHeckButtonName}
							<div in:fade>
								<h4 class="mb-2">name</h4>
								<div class=".col-4">
									<input class="mb-2" bind:value={first_name} />
							
									<input class="mb-2" bind:value={last_name} />
								</div>
								<h4 class="mb-2">age</h4>
								<div class=".col-4">
									<input class="mb-2" bind:value={age} />
								</div>
							</div>
						{/if}

						{#if ButtonName == EditButtonName}
						
							<button
								in:fade
								type="button"
								class={ButtonClass}
								data-mdb-ripple-color="dark"
								name={ButtonName}
								on:click={() => buttonCHanger()}
							>
								<i class={ButtonIClass} />
							</button>
						{:else if ButtonName == CHeckButtonName}
						<div class=" mb-2">
							<button
							in:fade
							type="button"
							class="btn btn-outline-danger btn-floating"
							data-mdb-ripple-color="dark"
							name={ButtonName}
							
							on:click={() => {
								
								remove();
								buttonCHanger();
							}}
						>
							<i>Delete your account</i>
						</button>
						</div>
						<div class="mb-2"><button
							in:fade
							type="submit"
							class="btn btn-outline-danger btn-floating"
							data-mdb-ripple-color="dark"
							name="back"
							on:click={() => {
								buttonCHanger();
								
							}}
						>
						<i class="fa-sharp fa-solid fa-x"></i>
						</button>
					
						<button
							in:fade
							type="submit"
							class={ButtonClass}
							data-mdb-ripple-color="dark"
							name={ButtonName}
							on:click={() => update()}
						>
							<i class={ButtonIClass} />
						</button></div>
							
						{/if}
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
