<script lang="ts">
	
  
	import Login from '$lib/components/Login.svelte';
	import Registration from '$lib/components/Registration.svelte';
	import Profile from "$lib/components/profile.svelte";
	import { authResp } from '$lib/utils/stores';
	import type { AuthResponse } from '$lib/api/backend/authApi';
	import type { User } from 'shared-component/dist/entity/User';
	import { get } from 'svelte/store';
	
	
	let currentPage: typeof Registration | typeof Profile | typeof Login = Registration;


	let authRespRawValue = get(authResp);
	if (authRespRawValue != null || authRespRawValue != undefined) {
		currentPage = Profile; 
	};
  
  const handleLoginSuccessful = () => {
    currentPage = Profile; 
  };
  const handleNavigateToRegistration = () => {
    currentPage = Registration;
  };
  const navigateToLogin = () => {
    currentPage = Login;
  };

  </script>
  

<section class="">
	
	<div class="px-4 py-5 px-md-5 text-center text-lg-start" style="background-color: hsl(0, 0%, 96%)">
	  <div class="container">
		<div class="row gx-lg-5 align-items-center">
		  <div class="col-lg-6 mb-5 mb-lg-0">
			<h1 class="my-5 display-3 fw-bold ls-tight">
			 Itt igazi könyv lehetsz! <br />
			  <span class="text-primary">BOOK BOOK és mégtöbb BOOK</span>
			</h1>
			<p style="color: hsl(217, 10%, 50.8%)">
			  Lorem ipsum dolor sit amet consectetur adipisicing elit.
			  Eveniet, itaque accusantium odio, soluta, corrupti aliquam
			  quibusdam tempora at cupiditate quis eum maiores libero
			  veritatis? Dicta facilis sint aliquid ipsum atque?
			</p>
		  </div>
  
		  <div class="col-lg-6 mb-5 mb-lg-0">
			<div class="card">
			  <div class="card-body py-5 px-md-5">
				
				<svelte:component this={currentPage} 
				on:loginSuccessful={handleLoginSuccessful} 
				on:navigateToRegistration={handleNavigateToRegistration}
				on:navigateToLogin={navigateToLogin} />
  
			  </div>
			</div>
		  </div>
		</div>
	  </div>
	</div>

  </section>


