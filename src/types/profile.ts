import type { ProviderType } from './login';

export interface ProfileData {
  userId: number;
  nickname: string;
  email: string;
  provider: ProviderType;
  createdAt: string | null;
}
