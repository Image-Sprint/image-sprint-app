import { useNotificationsQuery } from '@/hooks/useNotificationsQuery';
import { useCallback } from 'react';
import { throttle } from 'lodash';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';
import NotificationItem from './NotificationItem';
import type { NotificationData } from '@/types/notification';

const NotificationContent = () => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useNotificationsQuery({ pageSize: 5 });

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
    enabled: hasNextPage && !isFetchingNextPage,
    threshold: 1,
  });

  return (
    <>
      {data?.map((notification: NotificationData) => (
        <NotificationItem key={notification.id} {...notification} />
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

export default NotificationContent;
