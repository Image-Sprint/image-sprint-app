export type ProviderType = 'KAKAO' | 'NAVER';

export type LoginRequestDto = {
  provider: ProviderType;
  authorizationCode: string;
  state?: string;
};
