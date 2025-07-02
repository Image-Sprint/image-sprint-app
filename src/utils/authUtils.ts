import { ACCESS_TOKEN_KEY } from '@/constants/api';
import { AUTH_PROVIDER, type AuthProvider } from '@/constants/login';

export const isAuthProvider = (
  provider: string | undefined
): provider is AuthProvider => {
  return Object.values(AUTH_PROVIDER).includes(provider as AuthProvider);
};
export const getAccessToken = () => localStorage.getItem(ACCESS_TOKEN_KEY);
export const setAccessToken = (token: string) =>
  localStorage.setItem(ACCESS_TOKEN_KEY, token);
export const clearToken = () => localStorage.removeItem(ACCESS_TOKEN_KEY);
