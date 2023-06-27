import { authResp, selectedBook, bookFromDatabase } from '$lib/utils/stores';
import axios from 'axios';
import type { Book } from 'shared-component/dist/entity/Book';
import type { User } from 'shared-component/dist/entity/User';
import { getBook } from './bookApi';
import { updateFavoriteBooks } from '$lib/utils/functions';
import { component_subscribe } from 'svelte/internal';

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
	console.log("Set session started")
	console.log(localStorage == undefined);
	if (localStorage == undefined) {
		return;
	}
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
	try{
	return localStorage.getItem('token');}
	catch{
		return "";
	}
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
