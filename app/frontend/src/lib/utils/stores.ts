import { writable } from 'svelte/store';
import type { User } from 'shared-component';
import type { Book } from 'shared-component/dist/entity/Book';

type NullableUser = User | null;
type NullableBook = Book | null;


export const count = writable<NullableUser>(null);

export const selectedBook = writable<Book>();

export const allBooks = writable<Book[]>();
