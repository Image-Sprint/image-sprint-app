import type { ApiResponse } from '@/types/serverResponse';
import { axiosInstance } from './axiosInstance';
import { API_PATH } from '@/constants/api';
import axios from 'axios';
import type {
  GetNotificationsParams,
  NotificationResponse,
} from '@/types/notification';

export const getNotifications = async (
  params: GetNotificationsParams
): Promise<ApiResponse<NotificationResponse>> => {
  try {
    const response = await axiosInstance.get(API_PATH.NOTIFICATION, {
      params,
    });

    return response.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      throw err;
    }
    throw new Error('알림 정보를 불러올 수 없습니다.');
  }
};
