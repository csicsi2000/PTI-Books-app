import axios from 'axios';
import type { User } from 'shared-component/dist/entity/User';

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

export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('userId');
};

export const getToken = () => {
  return localStorage.getItem('token');
};

export const getUserId = () => {
  return parseInt(localStorage.getItem('userId') || '0');
};

export const isLoggedIn = () => {
  return !!getToken();
};