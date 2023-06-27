import { writable } from 'svelte/store';
import type { User } from 'shared-component';
import type { Book } from 'shared-component/dist/entity/Book';
import type { AuthResponse } from '$lib/api/backend/authApi';
import type { BookList } from 'shared-component/dist/entity/BookList';

type Nullable<T> = T | null

export const booklist_name = "booklist";


export const count = writable<Nullable<User>>(null);

export const selectedBook = writable<Book>();

export const allBooks = writable<Book[]>();

export const authResp = writable<Nullable<AuthResponse>>();

export const bookFromDatabase = writable<Book>();                      

export const favoriteBooks = writable<BookList>();
