<script lang="ts">
	import Logo from '$lib/img/book_heaven_logo.png';
	import { logout, type AuthResponse } from '$lib/api/backend/authApi';
	import { authResp } from '$lib/utils/stores';

	let userId = 0;

	let isUserLoggedIn: boolean;

	authResp.subscribe((value) => {
		console.log('triggered');
		if (value == undefined || value == null) {
			isUserLoggedIn = false;
		} else {
			isUserLoggedIn = true;
		}
		console.log('Logged in: ' + isUserLoggedIn);
	});
</script>

<nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top p-0">
	<div class="container-fluid">
		<a class="navbar-brand text-white bg-dark" href="/">
			<img src={Logo} alt="Logo" class="navbar-logo mx-md-4" width="50px" />
			<span class="navbar-text text-white fs-3"> Book Haven </span>
		</a>
		<button
			class="navbar-toggler"
			type="button"
			data-toggle="collapse"
			data-target="#navbarText"
			aria-controls="navbarText"
			aria-expanded="false"
			aria-label="Toggle navigation"
		>
			<span class="navbar-toggler-icon" />
		</button>
		<div class="collapse navbar-collapse" id="navbarText">
			<ul class="navbar-nav me-auto">

			</ul>
			<ul class="navbar-nav mx-md-4">
				{#if isUserLoggedIn }
					<li class="nav-item mx-md-4">
						<a
							href="/"
							class="nav-link text-white btns"
							on:click={() => {
								logout();
								console.log(isUserLoggedIn);
							}}
						>
							Logout
						</a>
					</li>
					<li class="nav-item mx-md-4 w-25">
						<a class="nav-link text-white btns" href="/Favorites"> Favourites</a>
					</li>
					<li class="nav-item mx-md-4 w-25">
						<a class="nav-link text-white btns" href="/Profile"> Profile </a>
					</li>
				{:else if !isUserLoggedIn}
					<li class="nav-item mx-md-4 w-25">
						<a class="nav-link text-white btns" href="/Login"> Login </a>
					</li>
					<li class="nav-item mx-md-4 w-25">
						<a class="nav-link text-white" href="/Registration"> Registration </a>
					</li>
					<li class="nav-item mx-md-4 w-25">
						<a class="nav-link text-white" href="/testLogin"> Test </a>
					</li>
				{/if}
			</ul>
		</div>
	</div>
</nav>
