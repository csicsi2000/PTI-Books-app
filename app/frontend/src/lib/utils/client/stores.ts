import { writable } from 'svelte/store';
import type { User } from 'shared-component';

type NullableUser = User | null;

export const count = writable<NullableUser>(null);