import { createJob } from '@/api/job';
import { ROUTE_URL_FULL } from '@/constants/routers';
import type { CreateJobRequestDto, JobResponse } from '@/types/job';
import type { ApiResponse } from '@/types/serverResponse';
import { delay } from '@/utils/timeUtils';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

export const useCreateJobMutation = () => {
  const navigate = useNavigate();

  const createJobMutation = useMutation<
    ApiResponse<JobResponse>,
    Error,
    { options: CreateJobRequestDto; files: File[] }
  >({
    mutationFn: async ({ options, files }) => {
      navigate('/converting', { state: { from: 'image' } });

      const [result] = await Promise.all([
        createJob(options, files),
        delay(1000),
      ]);

      return result;
    },
    onSuccess: () => {
      navigate(ROUTE_URL_FULL.JOB);
    },
    onError(error) {
      console.error('이미지 변환에 실패했습니다.', error);
      alert('이미지 변환에 실패하였습니다.');
      navigate(ROUTE_URL_FULL.IMAGE);
    },
  });

  return { mutateCreate: createJobMutation.mutate };
};
