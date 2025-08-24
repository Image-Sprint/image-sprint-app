import {
  CheckCircle,
  Clock,
  HelpCircle,
  Loader2,
  XCircle,
  type LucideIcon,
} from 'lucide-react';

export const getNotificationMeta = (
  type: string
): { label: string; color: string; Icon: LucideIcon } => {
  switch (type) {
    case 'JOB_STARTED':
      return {
        label: '변환 시작',
        color: 'bg-blue-100 text-blue-700',
        Icon: Loader2,
      };
    case 'JOB_DONE':
      return {
        label: '변환 완료',
        color: 'bg-green-100 text-green-700',
        Icon: CheckCircle,
      };
    case 'JOB_FAILED':
      return {
        label: '실패',
        color: 'bg-red-100 text-red-700',
        Icon: XCircle,
      };
    case 'ZIP_EXPIRED':
      return {
        label: '만료됨',
        color: 'bg-gray-100 text-gray-700',
        Icon: Clock,
      };
    default:
      return {
        label: '알 수 없음',
        color: 'bg-gray-100 text-gray-500',
        Icon: HelpCircle,
      };
  }
};
