import type { GetJobsParams, JobResponse } from '@/types/job';
import type { ApiResponse } from '@/types/serverResponse';
import { useQueryClient, type InfiniteData } from '@tanstack/react-query';
import { useEffect, useRef } from 'react';

export const useJobProgressSse = (
  myJobIds: number[],
  setProgressMap: React.Dispatch<React.SetStateAction<Record<number, number>>>,
  queryKey: readonly ['jobs', Omit<GetJobsParams, 'cursor'>]
) => {
  const queryClient = useQueryClient();
  const jobIdsRef = useRef<number[]>([]); // 초기 빈 배열로 시작

  useEffect(() => {
    jobIdsRef.current = myJobIds;
  }, [myJobIds]);

  useEffect(() => {
    const eventSource = new EventSource(
      `${import.meta.env.VITE_API_BASE_URL}/jobs/progress/stream`,
      { withCredentials: true }
    );

    eventSource.onopen = () => {
      console.info('SSE 연결 성공 - job 리스트 리페치');
      queryClient.invalidateQueries({ queryKey });
    };

    eventSource.addEventListener('progress', (event) => {
      try {
        const data = JSON.parse(event.data);
        if (data.done === -1 && data.total === -1) return;

        const { jobId, doneCount, imageCount } = data;

        if (!jobIdsRef.current.includes(jobId)) return;

        const progress = Math.min(1, doneCount / Math.max(imageCount, 1));

        setProgressMap((prev) => ({ ...prev, [jobId]: progress }));

        // 소수점 누락 방지 - 1보다 크거나 같을 때로 체크
        if (progress >= 1) {
          console.info(`jobId ${jobId} 완료 처리 시작`);

          queryClient.setQueryData<InfiniteData<ApiResponse<JobResponse>>>(
            queryKey,
            (oldData) => {
              if (!oldData?.pages) return oldData;
              return {
                ...oldData,
                pages: oldData.pages.map((page) => ({
                  ...page,
                  data: {
                    ...page.data,
                    jobs: page.data.jobs.map((job) =>
                      job.jobId === jobId ? { ...job, status: 'DONE' } : job
                    ),
                  },
                })),
              };
            }
          );

          // 너무 빠른 리페치 방지 + 한번만 invalidate
          setTimeout(() => {
            queryClient.invalidateQueries({ queryKey });
          }, 500);
        }
      } catch (e) {
        console.warn('SSE progress 이벤트 처리 실패', e);
      }
    });

    eventSource.onerror = (err) => {
      console.warn('SSE error', err);
    };

    return () => {
      eventSource.close();
    };
  }, [queryClient, queryKey, setProgressMap]);
};
