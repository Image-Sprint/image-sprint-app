import type { CreateJobRequestDto, JobResponse } from '@/types/job';
import type { ApiResponse } from '@/types/serverResponse';
import { axiosInstance } from './axiosInstance';
import { API_PATH } from '@/constants/api';
import axios from 'axios';

export const createJob = async (
  requestData: CreateJobRequestDto,
  files: File[]
): Promise<ApiResponse<JobResponse>> => {
  try {
    const formData = new FormData();

    // 이미지 파일들 추가
    files.forEach((file) => {
      formData.append('files', file);
    });

    // options JSON을 문자열로 변환해서 추가
    formData.append(
      'options',
      new Blob([JSON.stringify(requestData)], { type: 'application/json' })
    );

    const response = await axiosInstance.post(API_PATH.JOB, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return response.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      throw err;
    }
    throw new Error('Job 생성에 실패하였습니다.');
  }
};
