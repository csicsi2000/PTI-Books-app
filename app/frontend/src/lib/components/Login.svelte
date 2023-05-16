<script>
	import { containNumbers, loginToMyAccount } from "$lib/utils/function";
	import { useForm,  validators, required, minLength, email } from "svelte-use-form";
	import { authResp } from '$lib/utils/stores';	
	import { add_styles } from "svelte/internal";
	
	
	
	


	let password = '';
	let emailaddress='';
	let visible = false;

	function visibile(){ visible = true;}


	const form =useForm(); 

	
</script>



	 <div >
		<div >





			 
			  
			  
				<form use:form on:submit|preventDefault={loginToMyAccount(emailaddress, password)}>
					<card class="container">
					<h1>
						LogIn
					</h1>
					
					<label class="label"for="email">Email</label>
					<input class="input" type="email" name="email"  bind:value={emailaddress} use:validators={[required, email]} />
					<span class="hintgroup">
					
					</span>
					<label class="label"for="password">Password</label>
					<input class="input" type="password" name="password" use:validators={[required, minLength(5), containNumbers(2)]} />
					<span class="hintgroup">
					
				</span>
				
					<br />
					<button type="submit" disabled={!$form.valid} >
						<span class="button_top"> Login
						</span>
					</button>
					</card>
					</form>
					   
			
	
	  </div>
	  </div>
	  

	

	

<style>

.hintgroup{
	z-index: 20;


  color:red;

  
}

/*button*/
button {
  /* Variables */
  --button_radius: 0.75em;
  --button_color: #e8e8e8;
  --button_outline_color: #000000;
  font-size: 1em;
  font-weight: bold;
  border: none;
  border-radius: var(--button_radius);
  background: var(--button_outline_color);
}

.button_top {
  display: block;
  box-sizing: border-box;
  border: 2px solid var(--button_outline_color);
  border-radius: var(--button_radius);
  padding: 0.75em 1.5em;
  background: var(--button_color);
  color: var(--button_outline_color);
  transform: translateY(-0.2em);
  transition: transform 0.1s ease;
}

button:hover .button_top {
  /* Pull the button upwards when hovered */
  transform: translateY(-0.33em);
}

button:active .button_top {
  /* Push the button downwards when pressed */
  transform: translateY(0);
}

/*button*/

/*input*/
.input {

  outline: none;
  border-radius: 15px;
padding-left: 3%;
  background-color: #ccc;
  box-shadow: inset 2px 5px 10px rgba(0,0,0,0.3);
  transition: 300ms ease-in-out;
}

.input:focus {
  background-color: white;
  transform: scale(1.05);
  box-shadow: 13px 13px 100px #969696,
             -13px -13px 100px #ffffff;
}

/*input*/




	:global(.touched:invalid) {
		border-color: red;
		outline-color: red;
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
	.container {
		
	
		display:flex;
		flex-direction:column;
		height:100%;
		justify-content:center;
		align-items:center;
		position:relative;
		overflow: hidden;
		flex-wrap:wrap;	
		
	}
	.book-cover-title{
		padding:5px;
		color:rgb(73, 73, 73);
		display:flex;
		flex-direction:column;
		height:100%;
		justify-content:center;
		align-items:center;
		position:relative;
		overflow:hidden;
		flex-wrap:wrap;	
		position: absolute;
	
		font-family: "Brush Script MT", cursive; font-size: 24px; font-style: normal; font-variant: normal; font-weight: 700; line-height: 26.4px;
	}





	.book-reg-title{
		color:white;
		display:flex;
		flex-direction:column;
		height:50%;
		justify-content:center;
		align-items:center;
		position:relative;
		overflow:hidden;
		flex-wrap:wrap;	
		position: absolute;
	
		font-family: "Brush Script MT", cursive; font-size: 24px; font-style: normal; font-variant: normal; font-weight: 700; line-height: 26.4px;
	}
	.cover-img{
		position: absolute;
		z-index: 99;

	}

	@import url('https://fonts.googleapis.com/css?family=Cormorant+Garamond:300,400,600|Tulpen+One&display=swap');
 :root {
	/* colors */
	 --body-bg: #fafafa;
	 --page-bg: #f5f5f5;
	 --dark-text: #2a2935;
	/* spacing */
	/* this is what defines the global scale */
	 --baseline: 12px;
	/* fonts */
	 --book-title: 'Tulpen One', sans-serif;
	 --title: 'Cormorant Garamond', serif;
	 --body: 'Cormorant Garamond', serif;
	 --base-size: var(--baseline) * 1.2;
}
 * {
	 box-sizing: border-box;
}

 .cover {
	margin: calc(var(--baseline) *2);
	 width: calc(var(--baseline) * 60);
	 height: calc(var(--baseline) * 50);
	 box-shadow: 0 0 100px rgba(0, 0, 0, .3);
}
 .book {
	 width: 100%;
	 height: 100%;
	 display: flex;
	 perspective: 1200px;
}
 .book__page {
	 position: relative;
	 width: 50%;
	 height: 100%;
	 display: grid;
	 transform: rotateY(0deg);
	 transition: transform 0.9s cubic-bezier(0.645, 0.045, 0.355, 1);
	 transform-origin: 0% 0%;
	 background-color: var(--page-bg);
	 background-image: linear-gradient(90deg, rgba(227, 227, 227, 1) 0%, rgba(247, 247, 247, 0) 18%);
}
 .book__page:nth-of-type(1) {
	 background-image: linear-gradient(-90deg, rgba(227, 227, 227, 1) 0%, rgba(247, 247, 247, 0) 18%);
}


 .book__page--1 img {
	 width: 100%;
	 max-width: 100%;
	 height: auto;
}
 .book__page--2 {
	 position: absolute;
	 right: 0;
	
	 transform-style: preserve-3d;
	 background-color: var(--page-bg);
	 background-image: linear-gradient(90deg, rgba(227, 227, 227, 1) 0%, rgba(247, 247, 247, 0) 18%);
}

 .book__page-front {
	 position: absolute;
	 width: 100%;
	 height: 100%;
	 transform: rotateY(0deg) translateZ(1px);
}
 .book__page-back {
	 position: absolute;
	 width: 100%;
	 height: 100%;
	 padding: 0 calc(var(--baseline) * 1.8);
	 transform: rotateY(180deg) translateZ(1px);
}
 .book__page .page__content {

	overflow: hidden;
	 height: 100%;
	 position: relative;
	 text-align: center;
	
 
}
 .book__page .page__content-book-title {
	 font-family: var(--book-title);
	 font-size: calc(var(--base-size) * 3);
	 font-weight: bold;
	 text-transform: uppercase;
	 letter-spacing: 3px;
	 color: var(--dark-text);
	 margin-top: calc(var(--baseline) * 5);
	 margin-bottom: calc(var(--baseline) * 2);
}
 .book__page .page__content-author {
	 font-family: var(--title);
	 font-size: calc(var(--base-size) * 1.2);
	 font-weight: 100;
	 text-transform: uppercase;
	 color: var(--dark-text);
	 border-top: 1px solid var(--dark-text);
	 border-bottom: 1px solid var(--dark-text);
	 display: inline-block;
	 padding: calc(var(--baseline) / 2) calc(var(--baseline) / 5);
	 margin-bottom: calc(var(--baseline) * 6);
}



.book__page--1 {
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

.cover-img {
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

.book__page--1:hover .cover-img {
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
  -webkit-transform: rotatey(-80deg);
  -ms-transform: rotatey(-80deg);
  transform: rotatey(-80deg);
}




</style> 