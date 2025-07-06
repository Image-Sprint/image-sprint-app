import { getNotifications } from '@/api/notification';
import type {
  GetNotificationsParams,
  NotificationData,
  NotificationResponse,
} from '@/types/notification';
import type { ApiResponse } from '@/types/serverResponse';
import { useInfiniteQuery } from '@tanstack/react-query';

export const useNotificationsQuery = (
  params: Omit<GetNotificationsParams, 'cursor'>
) =>
  useInfiniteQuery<
    ApiResponse<NotificationResponse>, // raw
    Error, // error
    NotificationData[], // selected data type
    ['notifications', Omit<GetNotificationsParams, 'cursor'>], // queryKey
    string | null // pageParam
  >({
    queryKey: ['notifications', params],
    queryFn: async ({ pageParam, queryKey }) => {
      const [, baseParams] = queryKey;
      const cursor = pageParam ?? null;
      const pageSize = cursor ? 5 : 10;

      return await getNotifications({
        ...baseParams,
        cursor,
        pageSize,
      });
    },
    initialPageParam: null,
    getNextPageParam: (lastPage) => lastPage.data.nextCursor ?? null,
    refetchOnMount: true,
    select: (res) => res.pages.flatMap((page) => page.data.notifications),
  });
