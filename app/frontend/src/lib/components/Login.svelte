<script>
	import { containNumbers, passwordMatch } from "$lib/utils/function";
	import { useForm, Hint, HintGroup, validators, required, minLength, email } from "svelte-use-form";
	
	import { add_styles } from "svelte/internal";
	import { authResponse } from "\/utils/stores.js";
	
	const form = useForm();
	
	const requiredMessage = "This field is required";

	
	let visible = false;




	function visibile(){ visible = true;}



	function typewriter(node, { speed = 1 }) {
		const valid = (
			node.childNodes.length === 1 &&
			node.childNodes[0].nodeType === Node.TEXT_NODE
		);

		if (!valid) {
			throw new Error(`This transition only works on elements with a single text node child`);
		}

		const text = node.textContent;
		const duration = text.length / (speed * 0.01);

		return {
			duration,
			tick: t => {
				const i = ~~(text.length * t);
				node.textContent = text.slice(0, i);
			}
		};
	}



	function loginAccount(){
		const loginRequestBody={
			email:email,
			password:password
		};
	}

	
	let email = '';
	let password = '';


	function loginToMyAccount() {
		const loginRequestBody = {
			email: email,
			password: password
		};

		login(loginRequestBody)
			.then((authResponse) => {
				authResp.set(authResponse);
				navigate("/test");
				alert(Logged in with token ${authResponse.token} and user ID ${authResponse.id}.);
			})
			.catch((error) => {
				alert(Error logging in: ${loginRequestBody.email});
			});
	};







</script>

<div>

	<div class="cover">
		<div class="book">





		<label for="page-1"  class="book__page book__page--1">
		 
		 
		{#if visible}
		<p class="book-reg-title" style="color:black;"  transition:typewriter>
			Author:{name}{age}
		</p>
		{/if}
		<img class="cover-img"  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/193203/1111.jpg" alt="">
		</label>
		
		<label for="page-2" class="book__page book__page--4">
		 <!-- <div class="page__content">
			<h1 class="page__content-title">I</h1>
			<div class="page__content-blockquote">
			  <p class="page__content-blockquote-text">HARI SELDON — . . . born in the 11,988th year of the Galactic Era; died 12,069. The dates are more commonly given in terms of the current Foundational Era as -79 to the year 1 F.E. Born to middle-class parents on Helicon, Arcturus sector (where his father, in a legend of doubtful authenticity, was a tobacco grower in the hydroponic plants of the planet), he early showed amazing ability in mathematics. Anecdotes concerning his ability are innumerable, and some are contradictory. At the age of two, he is said to have. . . </p>
			  <p class="page__content-blockquote-text">. . . Undoubtedly his greatest contributions were in the field of psychohistory. Seldon found the field little more than a set of vague axioms; he left it a profound statistical science. . . . </p>
			  <p class="page__content-blockquote-text">. . . The best existing authority we have for the details of his life is the biography written by Gaal Dornick who, as a young man, met Seldon two years before the great mathematician's death. The story of the meeting . . .</p>
			  <span class="page__content-blockquote-reference">Encyclopedia Galactica*</span>
			</div>
			<div class="page__content-text">
			  <p>His name was Gaal Dornick and he was just a country boy who had never seen Trantor before. That is, not in real life. He had seen it many times on the hyper-video, and occasionally in tremendous three-dimensional newscasts covering an Imperial Coronation or the opening of a Galactic Council. Even though he had lived all his life on the world of Synnax, which circled a star at the edges of the Blue Drift, he was not cut off from civilization, you see. At that time, no place in the Galaxy was. </p>
	  
			  <p>There were nearly twenty-five million inhabited planets in the Galaxy then, and not one but owed allegiance to the Empire whose seat was on Trantor. It was the last half-century in which that could be said. </p>
			  <p>To Gaal, this trip was the undoubted climax of his young, scholarly life. He had been in space before so that the trip, as a voyage and nothing more, meant little to him. To be sure, he had traveled previously only as far as Synnax's only satellite in order to get the data on the mechanics of meteor driftage which he needed for his dissertation, but space-travel was all one whether one travelled half a million miles, or as many light years. </p>
			</div>
			<div class="page__number">3</div>
		  </div> -->
		</label>
		  
		
		  
		<!-- Goes to the second page -->
		

		<label class="book__page book__page--2">
		  <div class="book__page-front">
			<div class="page__content">
			  <h1 class="page__content-book-title">Author</h1>
			  
			  
				<form use:form>
					<card class="container">
					<h1>
						Registration
					</h1>

					<div class="form__group field">
						<input type="input" class="form__field" placeholder="Name" required="">
						<label for="name" class="form__label">Name</label>
					</div>	











					<label class="label" for="name">Name</label>
					
					<input class="input" bind:value={name} 	on:change={visibile}>

					<label  class="label" for="age">Age</label>
					<input class="input"  type="number" name="age"  />
					<label class="label"for="email" >Email</label>
					<input class="input" type="email" name="email" bind:value={email} />
					<HintGroup for="email">
						<Hint on="required">{requiredMessage}</Hint>
						<Hint on="email" hideWhenRequired>This must be a valid email</Hint>	
					</HintGroup>
					<label class="label"for="password">Password</label>
					<input class="input" type="password" name="password" use:validators={[required, minLength(5), containNumbers(2)]} />
					<HintGroup for="password">
						<Hint on="required">{requiredMessage}</Hint>
						<Hint on="minLength" hideWhenRequired let:value>This field must have at least {value} characters.</Hint>	
						<Hint on="containNumbers" hideWhen="minLength" let:value>
						This field must contain at least {value} numbers.
						</Hint>	
					</HintGroup>
					<label class="label" for="passwordConfirmation">Password Confirmation</label>
					<input class="input" type="password" name="passwordConfirmation" use:validators={[required, passwordMatch]} />
					<HintGroup for="passwordConfirmation">
						<Hint on="required">{requiredMessage}</Hint>
						<Hint on="passwordMatch" hideWhenRequired>Passwords do not match</Hint>	
					</HintGroup><br />
					<button disabled={!$form.valid} on:click|preventDefault>
						Submit
					</button>
					</card>
					</form>
					
			
				
			</div>
		  </div>





		<!--  <div class="book__page-back">
			<div class="page__content">
			  <h1 class="page__content-title">Contents</h1>
			  <table class="page__content-table">
				<tr>
				  <td align="left">Part I</td><td align="left">The Psycohistorians</td><td align="right">3</td>
				</tr>
				<tr>
				  <td align="left">Part II</td><td align="left">The Encyclopedists</td><td align="right">43</td>
				</tr>
				<tr>
				  <td align="left">Part III</td><td align="left">The Mayors</td><td align="right">87</td>
				</tr>
				<tr>
				  <td align="left">Part IV</td><td align="left">The Traders</td><td align="right">147</td>
				</tr>
				<tr>
				  <td align="left">Part V</td><td align="left">The Merchant Princes</td><td align="right">173</td>
				</tr>
			  </table>
			  
			  <div class="page__number">2</div>
			</div>
		  </div>-->
		</label>
	  </div>
	  </div>
	  

	
</div>
	

<style>
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
	/*.container {
		display:grid;
		grid-template-columns:auto auto;
	}*/
	

/*input field*/
.input-container {
  position: relative;
  margin: 50px auto;
  width: 200px;
}

.input-container input[type="text"] {
  font-size: 20px;
  width: 100%;
  border: none;
  border-bottom: 2px solid #ccc;
  padding: 5px 0;
  background-color: transparent;
  outline: none;
}

.input-container .label {
  position: absolute;
  top: 0;
  left: 0;
  color: #ccc;
  transition: all 0.3s ease;
  pointer-events: none;
}

.input-container input[type="text"]:focus ~ .label,
.input-container input[type="text"]:valid ~ .label {
  top: -20px;
  font-size: 16px;
  color: #333;
}

.input-container .underline {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  width: 100%;
  background-color: #333;
  transform: scaleX(0);
  transition: all 0.3s ease;
}

.input-container input[type="text"]:focus ~ .underline,
.input-container input[type="text"]:valid ~ .underline {
  transform: scaleX(1);
}






	
	.book-reg-title{
		color:white;
		display:flex;
		flex-direction:column;
		height:100%;
		justify-content:center;
		align-items:center;
		position:relative;
		overflow:hidden;
		flex-wrap:wrap;	
		position: absolute;
		z-index: 99;

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
 body {
	 background-color: var(--body-bg);
	 height: 100vh;
	 display: flex;
	 flex-direction: column;
	 align-items: center;
	 justify-content: center;
}
 .cover {
	margin: calc(var(--baseline) *2);;
	 width: calc(var(--baseline) * 60);
	 height: calc(var(--baseline) * 42.6);
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