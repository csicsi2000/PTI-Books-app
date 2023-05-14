import axios from "axios";
import  type { AxiosResponse } from "axios";
import type { Book } from 'shared-component/dist/entity/Book';
import { BASE_URL, getToken } from "./authApi";

const apiUrl = BASE_URL;

export const getBook = async (isbn13bookId: string): Promise<Book> => {
  const response: AxiosResponse<Book> = await axios.get(`${apiUrl}/books/${isbn13bookId}`, {
    headers: { Authorization: `Bearer ${getToken()}` },
  });
  return response.data;
};

export const postReview = async (
  userId: string,
  bookId: string,
  comment: string,
  rating: number
): Promise<string> => {
  const response: AxiosResponse<string> = await axios.post(
    `${apiUrl}/books/${userId}/reviews`,
    { bookId, comment, rating },
    { headers: { Authorization: `Bearer ${getToken()}` } }
  );
  return response.data;
};

export const deleteReview = async (bookId:string,reviewId: string): Promise<string> => {
  const response: AxiosResponse<string> = await axios.delete(`${apiUrl}/books/${bookId}/reviews/${reviewId}`, {
    headers: { Authorization: `Bearer ${getToken()}` },
  });
  return response.data;
};
