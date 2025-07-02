import { API_BASE_URL } from '@/constants/api';
import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: import.meta.env.PROD ? API_BASE_URL : '/api',
  withCredentials: true,
});
