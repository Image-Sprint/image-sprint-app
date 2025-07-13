import { getJobs } from '@/api/job';
import type { GetJobsParams, JobData, JobResponse } from '@/types/job';
import type { ApiResponse } from '@/types/serverResponse';
import { useInfiniteQuery } from '@tanstack/react-query';

export const useJobsQuery = (params: Omit<GetJobsParams, 'cursor'>) =>
  useInfiniteQuery<
    ApiResponse<JobResponse>, // raw
    Error, // error
    JobData[], // selected data type
    ['jobs', Omit<GetJobsParams, 'cursor'>], // queryKey
    string | null // pageParam
  >({
    queryKey: ['jobs', params],
    queryFn: async ({ pageParam, queryKey }) => {
      const [, baseParams] = queryKey;
      const cursor = pageParam ?? null;
      const pageSize = cursor ? 5 : 10;

      return await getJobs({
        ...baseParams,
        cursor,
        pageSize,
      });
    },
    initialPageParam: null,
    getNextPageParam: (lastPage) => lastPage.data.nextCursor ?? null,
    refetchOnMount: true,
    select: (res) => res.pages.flatMap((page) => page.data.jobs),
  });
