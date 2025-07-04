import { API_PATH } from '@/constants/api';
import { axiosInstance } from './axiosInstance';
import type { ProfileData } from '@/types/profile';
import axios from 'axios';
import type { ApiResponse } from '@/types/serverResponse';

export const getMyProfile = async (): Promise<ApiResponse<ProfileData>> => {
  try {
    const response = await axiosInstance.get(API_PATH.USER);

    return response.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      throw err;
    }
    throw new Error('유저 정보를 불러올 수 없습니다.');
  }
};
