import type { WatermarkPosition } from './imageConverter';

export type CreateJobRequestDto = {
  resizeWidth?: number;
  resizeHeight?: number;
  keepRatio?: boolean;
  toFormat: string;
  quality?: number;
  watermarkText?: string;
  watermarkPosition?: WatermarkPosition;
  watermarkOpacity?: number;
};

export interface JobResponse {
  jobs: JobData[];
  nextCursor: string | null;
  hasNext: boolean;
}

export interface JobData {
  jobId: number;
  status: JobStatus;
  imageCount: number;
  originalSize: number;
  createdAt: string;
  expiresAt?: string;
  zipUrl?: string;
}

export type GetJobsParams = {
  cursor?: string | null;
  pageSize?: number;
};

// enum type 관련
export type JobStatus = 'PENDING' | 'PROCESSING' | 'DONE' | 'FAILED';
