import { getAccessToken } from '@/utils/authUtils';
import { axiosInstance } from './axiosInstance';
import { API_PATH } from '@/constants/api';

const AUTH_EXCLUDE_PATHS = [API_PATH.LOGIN, API_PATH.REFRESH];

axiosInstance.interceptors.request.use((config) => {
  const token = getAccessToken();

  if (token && !AUTH_EXCLUDE_PATHS.some((path) => config.url?.includes(path))) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});
