export const AUTH_PROVIDER = {
  KAKAO: 'KAKAO',
  NAVER: 'NAVER',
} as const;

export type AuthProvider = (typeof AUTH_PROVIDER)[keyof typeof AUTH_PROVIDER];
