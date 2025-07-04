import { getAccessToken } from '@/utils/authUtils';
import { axiosInstance } from './axiosInstance';
import { API_PATH } from '@/constants/api';
import { AxiosError } from 'axios';

const AUTH_EXCLUDE_PATHS = [API_PATH.LOGIN, API_PATH.REFRESH];

axiosInstance.interceptors.request.use((config) => {
  const token = getAccessToken();

  if (token && !AUTH_EXCLUDE_PATHS.some((path) => config.url?.includes(path))) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

axiosInstance.interceptors.response.use(
  (response) => {
    const { status, success, message } = response.data;

    if (!success || status !== 200) {
      const error = new AxiosError(message);
      error.status = status;

      throw error;
    }

    return response;
  },
  (error) => {
    // 실제 HTTP 에러 (네트워크 에러, 500 등..)
    return Promise.reject(error);
  }
);
