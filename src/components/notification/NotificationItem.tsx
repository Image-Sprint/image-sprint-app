import { getNotificationMeta } from '@/constants/notification';
import { NOTIFICATION_ITEM_STYLE as style } from '@/constants/styles';
import type { NotificationType } from '@/types/notification';
import { formatDate } from '@/utils/dateUtils';
import { Calendar } from 'lucide-react';

type NotificationItemProps = {
  id: number;
  content: string;
  type: NotificationType;
  createdAt: string;
};
const NotificationItem = (props: NotificationItemProps) => {
  const { color, Icon } = getNotificationMeta(props.type);

  return (
    <div className={style.itemContainer}>
      <div className={style.badgeWrapper}>
        <span className={`${style.badge} ${color}`}>
          <Icon className={style.icon} />
          {props.type}
        </span>
      </div>
      <p className={style.content}>{props.content}</p>
      <div className={style.dateWrapper}>
        <Calendar className={style.calendarIcon} />
        <span>{formatDate(props.createdAt)}</span>
      </div>
    </div>
  );
};
export default NotificationItem;
