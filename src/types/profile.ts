import type { ProviderType } from './login';

export interface ProfileData {
  userId: number;
  nickname: string;
  email: string;
  provider: ProviderType;
  createdAt: string | null;
}

export type WebhookData = {
  webhookId: number;
  type: WebhookType;
  url: string;
};

export type WebhookRequestDto = {
  type: WebhookType;
  url: string;
};

export type WebhookType = 'SLACK' | 'DISCORD';
