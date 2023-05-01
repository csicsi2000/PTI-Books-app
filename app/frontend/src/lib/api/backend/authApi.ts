import axios from 'axios';

interface AuthResponse {
  token: string;
  id: number;
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
  const { token, id } = response.data;
  localStorage.setItem('token', token);
  localStorage.setItem('userId', String(id));
  return { token, id };
};

export const register = async (data: RegisterRequestBody): Promise<AuthResponse> => {
  const response = await axios.post<AuthResponse>(`${BASE_URL}/register`, data);
  const { token, id } = response.data;
  localStorage.setItem('token', token);
  localStorage.setItem('userId', String(id));
  return { token, id };
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
