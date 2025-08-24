import { useCallback, useEffect, useMemo, useState } from 'react';
import JobItem from './JobItem';
import { useJobsQuery } from '@/hooks/useJobsQuery';
import { throttle } from 'lodash';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';
import { useJobProgressSse } from '@/hooks/useJobProgressSse';
import { JOB_QUERY_KEY } from '@/constants/job';

const JobContent = () => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useJobsQuery(
    JOB_QUERY_KEY[1]
  );

  const [progressMap, setProgressMap] = useState<Record<number, number>>({});

  const jobIds = useMemo(() => {
    return data?.map((job) => job.jobId) ?? [];
  }, [data]);

  // SSE 연결
  useJobProgressSse(jobIds, setProgressMap, JOB_QUERY_KEY);

  // jobId 목록 바뀌면 progressMap도 정리
  useEffect(() => {
    setProgressMap((prev) => {
      const newMap: Record<number, number> = {};
      jobIds.forEach((id) => {
        newMap[id] = prev[id] ?? 0;
      });
      return newMap;
    });
  }, [jobIds]);

  const throttledFetchNextPage = useCallback(
    throttle(
      () => {
        if (hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      },
      1000,
      { trailing: true }
    ),
    [fetchNextPage, hasNextPage, isFetchingNextPage]
  );

  const observerRef = useInfiniteScroll({
    onIntersect: throttledFetchNextPage,
    enabled: data!.length > 0 && hasNextPage && !isFetchingNextPage,
    threshold: 1,
  });

  return (
    <>
      {data?.map((job) => (
        <JobItem key={job.jobId} {...job} progress={progressMap[job.jobId]} />
      ))}

      {hasNextPage && (
        <div
          ref={observerRef}
          style={{ height: 2, background: 'transparent' }}
        />
      )}
    </>
  );
};

export default JobContent;
