import { authResp, selectedBook, bookFromDatabase, booklist_name, favoriteBooks } from '$lib/utils/stores';
import axios from 'axios';
import type { Book } from 'shared-component/dist/entity/Book';
import type { User } from 'shared-component/dist/entity/User';
import { getBook } from './bookApi';
import { get } from 'svelte/store';
import { createBookList, getBookList } from './booklistApi';
import { updateFavoriteBooks } from '$lib/utils/functions';

export interface AuthResponse {
	token: string;
	user: User;
}

interface LoginRequestBody {
	email: string;
	password: string;
}

interface RegisterRequestBody {
	email: string;
	password: string;
	firstName: string;
	lastName: string;
	age: number;
}
interface UserDataRequestBody {
	email: string;
	password: string;
	firstName: string;
	lastName: string;
	age: number;
}

export const BASE_URL = 'http://localhost:3000';

export const login = async (data: LoginRequestBody): Promise<AuthResponse> => {
	const response = await axios.post<AuthResponse>(`${BASE_URL}/login`, data);
	const { token, user } = response.data;
	localStorage.setItem('token', token);
	localStorage.setItem('user', String(user));
	return { token, user };
};

export const register = async (data: RegisterRequestBody): Promise<AuthResponse> => {
	const response = await axios.post<AuthResponse>(`${BASE_URL}/register`, data);
	const { token, user } = response.data;
	localStorage.setItem('token', token);
	localStorage.setItem('userId', String(user));
	return { token, user };
};

export const setSession = async () => {
	try {
		let book = JSON.parse(localStorage.getItem('selectedBook') || '') as Book;
		if (book != null) {
			console.log(book as Book);
			selectedBook.set(book as Book);
			getBook(book.primary_isbn13)
				.then((book) => {
					bookFromDatabase.set(book);
				})
				.catch((error) => {
					bookFromDatabase.set(book);
					console.error(`Error getting book review: ${error.message}`);
				});
			console.log('Book set');
		}
	} catch {
		console.log('No selected book found');
	}

	selectedBook.subscribe((value) => {
		console.log('selectedBook changed: ' + value.title);
		localStorage.setItem('selectedBook', JSON.stringify(value));
	});

	const sessionToken = localStorage.getItem('token');

	if (!sessionToken) {
		// Handle the case when the session token is not available
		console.log('No session found');
		return null;
	}

	try {
		const response = await axios.post<User>(`${BASE_URL}/session`, { sessionToken });
		const user = response.data as User;
		authResp.set({ token: sessionToken, user: user });
		console.log('User found: ' + user.email);
		await updateFavoriteBooks();
		return user;
	} catch (error) {
		// Handle any error that occurred during the API call
		localStorage.setItem('token', '');
		authResp.set(null);

		console.log('Error:', error);
		return null;
	}
};

export const updateUser = async (userId: string, data: UserDataRequestBody): Promise<User> => {
	const response = await axios.put<User>(`${BASE_URL}/users/${userId}`, data, {
		headers: { Authorization: `Bearer ${getToken()}` }
	});
	const updatedUser = response.data;
	return updatedUser;
};

export const deleteUser = async (userId: string): Promise<void> => {
	await axios.delete(`${BASE_URL}/users/${userId}`, {
		headers: { Authorization: `Bearer ${getToken()}` }
	});
};

export const logout = () => {
	localStorage.removeItem('token');
	localStorage.removeItem('userId');
	authResp.set(null);
	console.log('Logout');
};

export const getToken = () => {
	return localStorage.getItem('token');
};

export const getUserId = () => {
	return parseInt(localStorage.getItem('userId') || '0');
};

export const isLoggedIn = () => {
	let res = getToken();
	if (res == null) {
		return false;
	}
	return true;
};
