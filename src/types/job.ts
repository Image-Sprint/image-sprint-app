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
  jobId: number;
  status: string;
  imageCount: number;
  originalSize: number;
}
