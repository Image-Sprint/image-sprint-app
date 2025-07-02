import {
  AlertCircle,
  CheckSquare,
  ImageIcon,
  User,
  type LucideIcon,
} from 'lucide-react';

export interface NavMenuItem {
  path: string;
  label: string;
  icon: LucideIcon;
}

export const NAV_MENU_ITEM_LIST: NavMenuItem[] = [
  {
    path: '/home/image',
    label: '이미지 변환',
    icon: ImageIcon,
  },
  {
    path: '/home/job',
    label: '변환 결과',
    icon: CheckSquare,
  },
  {
    path: '/home/notification',
    label: '알림',
    icon: AlertCircle,
  },
  {
    path: '/home/user',
    label: '마이페이지',
    icon: User,
  },
];
