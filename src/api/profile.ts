import { API_PATH } from '@/constants/api';
import { axiosInstance } from './axiosInstance';
import type {
  ProfileData,
  WebhookData,
  WebhookRequestDto,
} from '@/types/profile';
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

export const getMyWebhook = async (): Promise<ApiResponse<WebhookData[]>> => {
  try {
    const response = await axiosInstance.get(API_PATH.WEBHOOK);

    return response.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      throw err;
    }
    throw new Error('웹 훅 정보를 불러올 수 없습니다.');
  }
};

export const testWebhook = async (
  requestData: WebhookRequestDto
): Promise<ApiResponse<string>> => {
  try {
    const response = await axiosInstance.post(
      API_PATH.WEBHOOK + '/test',
      requestData
    );

    return response.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      throw err;
    }
    throw new Error('웹 훅 테스트에 실패하였습니다.');
  }
};

export const registerWebhook = async (
  requestData: WebhookRequestDto
): Promise<ApiResponse<string>> => {
  try {
    const response = await axiosInstance.post(API_PATH.WEBHOOK, requestData);

    return response.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      throw err;
    }
    throw new Error('웹 훅 등록에 실패하였습니다.');
  }
};

export const deleteWebhook = async (
  webhookId: number
): Promise<ApiResponse<string>> => {
  try {
    const response = await axiosInstance.delete(
      API_PATH.WEBHOOK + `/${webhookId}`
    );

    return response.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      throw err;
    }
    throw new Error('웹 훅 삭제에 실패하였습니다.');
  }
};
