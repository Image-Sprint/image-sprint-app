import type { LoginRequestDto } from '@/types/login';
import { axiosInstance } from './axiosInstance';
import { API_PATH } from '@/constants/api';

const socialLogin = async (requestData: LoginRequestDto) => {
  const response = await axiosInstance.post(API_PATH.LOGIN, requestData, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return response.data;
};

export { socialLogin };
