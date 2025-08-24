import { API_PATH } from '@/constants/api';
import { axiosInstance } from './axiosInstance';

const logout = async () => {
  const response = await axiosInstance.post(API_PATH.LOGOUT, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return response.data;
};

export { logout };
