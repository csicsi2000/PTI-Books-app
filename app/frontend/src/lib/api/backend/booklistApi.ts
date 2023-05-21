import axios from "axios";
import type { Book } from 'shared-component/dist/entity/Book';
import type { BookList } from "shared-component/dist/entity/BookList";
import { BASE_URL } from "./authApi";

const apiUrl = BASE_URL;

export async function getUserBookLists(userId: number): Promise<BookList[]> {
  try {
    const response = await axios.get(`${BASE_URL}/users/${userId}/booklists`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getBookList(userId: number, booklistId: number): Promise<BookList> {
  try {
    const response = await axios.get(`${BASE_URL}/users/${userId}/booklists/${booklistId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Booklist not found");
  }
}

export async function createBookList(userId: number, name: string): Promise<void> {
  try {
    let res = await axios.post(`${BASE_URL}/users/${userId}/booklists`, { name }, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    console.log(res);
  } catch (error) {
    console.error(error);
    throw new Error("Failed to create booklist");
  }
}

export async function insertBookIntoList(userId: number, booklistId: number, book: Book): Promise<void> {
  try {
    await axios.post(`${BASE_URL}/users/${userId}/booklists/${booklistId}/books`, { book }, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
  } catch (error) {
    console.error(error);
    throw new Error("Failed to insert book into list");
  }
}

export async function deleteBookFromList(userId: number, booklistId: number, bookId: number): Promise<void> {
  try {
    await axios.delete(`${BASE_URL}/users/${userId}/booklists/${booklistId}/books/${bookId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
  } catch (error) {
    console.error(error);
    throw new Error("Failed to delete book from list");
  }
}
