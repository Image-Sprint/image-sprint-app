import LoadingSpinner from '@/components/common/LoadingSpinner';
import NotificationContent from '@/components/notification/NotificationContent';
import { NOTIFICATION_STYLE as style } from '@/constants/styles';
import { Suspense } from 'react';

const Notification = () => {
  return (
    <div className={style.pageWrapper}>
      <div className={style.header}>
        <div className={style.main}>
          <Suspense fallback={<LoadingSpinner />}>
            <NotificationContent />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default Notification;
