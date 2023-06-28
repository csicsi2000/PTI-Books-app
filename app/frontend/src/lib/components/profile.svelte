<script lang="ts">
	import { authResp } from '$lib/utils/stores';

	import {
		containNumbers,
		passwordMatch,
		registerMyAccount,
		relocation,
		removeMyAccount,
		updateMyAccount
	} from '$lib/utils/functions';
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

	import { logout, type AuthResponse } from '$lib/api/backend/authApi';
	import type { User } from 'shared-component/dist/entity/User';
	import { get } from 'svelte/store';

	let showWarning = false;
	let first_name = '';
	let last_name = '';
	let age = 0;
	let emailaddress = '';
	let password = '';
	let id = '';

	let authRespRawValue = get(authResp);
	if (authRespRawValue == null || authRespRawValue == undefined) {
		showWarning = true;
	} else {
		let authRespValue = authRespRawValue as AuthResponse;
		console.log('test');
		console.log(authRespValue);
		first_name = authRespValue.user.firstName;
		last_name = authRespValue.user.lastName;
		age = authRespValue.user.age;
		id = authRespValue.user.id.toString();
		emailaddress = authRespValue.user.email;
		password = authRespValue.user.password;
		console.log(password);
	}

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
	$: authResp.subscribe((value) => {
		example = get(authResp);
	});

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
		updateMyAccount(id, first_name, last_name, age, emailaddress, '');
	}

	function remove() {
		removeMyAccount(id);
		logout();
		relocation('/');
	}
</script>

{#if showWarning}
	<div class="container justify-content-center align-items-center">
		<div class="alert alert-danger mb-2 text-center">Not existing account!!</div>

		<div class="mb-2 text-center">
			<button class="btn btn-outline-danger btn-floating" on:click={() => relocation('/')}>
				Back to the main Page!
			</button>
		</div>
	</div>
{:else}
	<div class="min-vh-100 d-flex align-items-center justify-content-center">
		<div class="card" style="width: 18rem;">
			<div class="card-body">
				{#if ButtonName == EditButtonName}
					<div in:fade>
						<p class="mb-2 text-muted">Name</p>
						<div class=".col-4">
							<label class="mb-2" for="first-name">{first_name}</label>

							<label class="mb-2" for="last-name">{last_name}</label>
						</div>

						<p class="mb-2 text-muted">Age</p>
						<div class=".col-4">
							<label class="mb-2" for="age">{age}</label>
						</div>
					</div>
				{:else if ButtonName == CHeckButtonName}
					<div in:fade>
						<div class="form-outline mb-4">
							<label class="label" for="first-name">First Name</label>

							<input class="form-control" bind:value={first_name} />
						</div>
						<div class="form-outline mb-4">
							<label class="label" for="last-name">Last Name</label>

							<input class="form-control" bind:value={last_name} />
						</div>
						<div class="form-outline mb-4">
							<label class="label" for="last-name">Age</label>

							<input class="form-control" bind:value={age} />
						</div>
					</div>
				{/if}

				{#if ButtonName == EditButtonName}
					<div class=" mb-2 text-center">
						<button
							in:fade
							type="button"
							class={ButtonClass}
							data-mdb-ripple-color="dark"
							name={ButtonName}
							on:click={() => buttonCHanger()}
						>
							<i class={ButtonIClass} />Edit
						</button>
					</div>
				{:else if ButtonName == CHeckButtonName}
					<div class="mb-2 text-center w-100">
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
					<div class="mb-2 row">
						<div class="col">
							<button
								in:fade
								type="submit"
								class="btn btn-outline-danger btn-floating w-100"
								data-mdb-ripple-color="dark"
								name="back"
								on:click={() => {
									buttonCHanger();
								}}
							>
								<i class="fa-sharp fa-solid fa-x pr-2" />Close
							</button>
						</div>
						<div class="col">
							<button
								in:fade
								type="submit"
								class="{ButtonClass} w-100"
								data-mdb-ripple-color="dark"
								name={ButtonName}
								on:click={() => {
									update();
									buttonCHanger();
								}}
							>
								<i class={ButtonIClass} />Accept
							</button>
						</div>
					</div>
				{/if}
			</div>
		</div>
	</div>
{/if}
