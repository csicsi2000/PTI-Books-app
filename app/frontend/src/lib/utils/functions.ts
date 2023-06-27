import {
	deleteUser,
	login,
	register,
	updateUser,
	type AuthResponse
} from '$lib/api/backend/authApi';
import { postReview } from '$lib/api/backend/bookApi';
import { authResp, booklist_name, favoriteBooks } from '$lib/utils/stores';
import type { Book } from 'shared-component/dist/entity/Book';
import type { Review } from 'shared-component/dist/entity/Review';
import { goto } from '$app/navigation';
import { createBookList, getBookList } from '$lib/api/backend/booklistApi';
import { get } from 'svelte/store';
import type { BookList } from 'shared-component/dist/entity/BookList';

export async function loginToMyAccount(email: string, password: string) {
	const loginRequestBody = {
		email: email,
		password: password
	};

	await login(loginRequestBody)
		.then((authResponse) => {
			console.log(authResponse);
			authResp.set(authResponse);
		})
		.catch((error) => {
			alert(`Error logging in: ${loginRequestBody.email}`);
		});
}

export function registerMyAccount(
	email: string,
	password: string,
	firstName: string,
	lastName: string,
	age: number
) {
	const registerRequestBody = {
		email: email,
		password: password,
		firstName: firstName,
		lastName: lastName,
		age: age
	};

	register(registerRequestBody)
		.then((authResponse) => {
			authResp.set(authResponse);
			alert(`Logged in with token ${authResponse.token} and user ID ${authResponse.user.email}.`);
		})
		.catch((error) => {
			alert(`Error logging in: ${error.message}`);
		});
}

export function updateMyAccount(
	user: string,
	firstName: string,
	lastName: string,
	age: number,
	email: string,
	password: string
) {
	const userId = user;

	const updaterRequestBody = {
		firstName: firstName,
		lastName: lastName,
		age: age,
		email: email,
		password: password
	};

	updateUser(userId, updaterRequestBody)
		.then((updaterRequestBody) => {
			console.log('Felhasználó frissítve:');
		})
		.catch((error) => {
			console.error('Hiba történt a felhasználó frissítése közben:', error);
		});
}

export function removeMyAccount(User: string) {
	const userId = User;

	deleteUser(userId)
		.then((userId) => {
			console.log('Felhasználó törölve:');
		})
		.catch((error) => {
			console.error('Hiba történt a felhasználó törlése közben:', error);
		});
}

export function submitMyReview(
	reviewTitle: string,
	review: string,
	userId: string,
	bookToReview: Book,
	rating: number
) {
	if (reviewTitle.length < 1 || review.length < 1) {
		alert('Wrong review!');
	} else {
		let reviewToPost =
			"<h5 class='card-title'>" + reviewTitle + '</h5>' + "<p class='card-text'>" + review + '</p>';
		postReview(userId.toString(), bookToReview, reviewToPost, rating)
			.then((string) => {})
			.catch((error) => {
				alert(`Error submitting review`);
			});
	}
}

export function relocation(direction: string) {
	//window.location.replace(direction);
	goto(direction);
}

export function passwordMatch(value: any, form: any) {
	if (value !== form.values.password) {
		return { passwordMatch: true };
	}
}

export function containNumbers(numbers: any) {
	return function (value: any) {
		if (value.replace(/[^0-9]/g, '').length < numbers) {
			return { containNumbers: numbers };
		}
	};
}

export async function updateFavoriteBooks() {
	console.log("Start favorite read.");
	let res = get(authResp) as AuthResponse;
	if (res == undefined || res?.user == null) {
		return;
	}
	let existingList: BookList;
	try {
        console.log("Try find list");
		existingList = await getBookList(res.user.id);
	} catch {
        console.log('Missing favorites list');
		createBookList(res.user.id, booklist_name);
		existingList = await getBookList(res.user.id);
	}
	console.log('Existing list: ' + existingList.name + ' ' + existingList.id);
	console.log(existingList);
	favoriteBooks.set(await getBookList(res.user.id));
}
