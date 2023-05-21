import { writable } from 'svelte/store';
import type { User } from 'shared-component';
import type { Book } from 'shared-component/dist/entity/Book';
import type { AuthResponse } from '$lib/api/backend/authApi';

type NullableUser = User | null;
type NullableBook = Book | null;
type NullableRespons = AuthResponse | null;

export const count = writable<NullableUser>(null);

export const selectedBook = writable<Book>();

export const allBooks = writable<Book[]>();

export const authResp = writable<AuthResponse>();

export const bookFromDatabase = writable<Book>();
