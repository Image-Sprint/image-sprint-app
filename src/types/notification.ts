// dto 관련
export interface NotificationResponse {
  notifications: NotificationData[];
  nextCursor: string | null;
  hasNext: boolean;
}

export interface NotificationData {
  id: number;
  content: string;
  type: NotificationType;
  createdAt: string;
}

// enum type 관련
export type NotificationType =
  | 'JOB_STARTED'
  | 'JOB_DONE'
  | 'JOB_FAILED'
  | 'ZIP_EXPIRED';

// api 관련
export type GetNotificationsParams = {
  cursor?: string | null;
  pageSize?: number;
};
