<script lang="ts">
	import Logo from '$lib/img/book_heaven_logo.png';

	let user = {
		loggedIn: false
	};

	function toggle() {
		user.loggedIn = !user.loggedIn;
	}
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
				<li class="nav-item dropdown">
					<a
						class="nav-link dropdown-toggle text-white"
						href="#"
						role="button"
						data-bs-toggle="dropdown"
						aria-expanded="false"
					>
						Categories
					</a>
					<ul class="dropdown-menu">
						<li><a class="dropdown-item" href="#">Action</a></li>
						<li><a class="dropdown-item" href="#">Another action</a></li>
						<li><a class="dropdown-item" href="#">Something else here</a></li>
					</ul>
				</li>
				<li class="nav-item">
					<a class="nav-link text-white" href="/test">Test Call</a>
				</li>
			</ul>
			<ul class="navbar-nav mx-md-4">
				{#if !user.loggedIn}
					<li class="nav-item mx-md-4">
						<a class="nav-link text-white btns" href="#" on:click={toggle}> Login </a>
					</li>
					<li class="nav-item">
						<a class="nav-link text-white" href="#"> Registration </a>
					</li>
					<li class="nav-item">
						<a class="nav-link text-white" href="/testLogin"> Test </a>
					</li>
				{/if}
				{#if user.loggedIn}
				<li class="nav-item mx-md-4">
					<a class="nav-link text-white btns" href="#"> Favourite Books </a>
				</li>
				<li class="nav-item mx-md-4">
					<a class="nav-link text-white btns" href="#"> Profile </a>
				</li>
					<li class="nav-item mx-md-4">
						<a class="nav-link text-white btns" href="#" on:click={toggle}> Logout </a>
					</li>
				{/if}
			</ul>
		</div>
	</div>
</nav>
