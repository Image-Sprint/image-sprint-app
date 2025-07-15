export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
export const API_STALE_TIME = 1000 * 10; // ms 단위, 10초
export const API_RETRY_COUNT = 1;
export const ACCESS_TOKEN_KEY = 'ACCESS_TOKEN';

export const AUTH_EXCLUDE_PATHS = ['/auth/login', '/auth/tokens/refresh'];

export const API_PATH = {
  LOGIN: '/auth/login',
  LOGOUT: '/auth/logout',
  IMAGE: '/images',
  REFRESH: 'auth/tokens/refresh',
  JOB: '/jobs',
  NOTIFICATION: '/notifications',
  USER: 'users/me',
  WEBHOOK: '/webhooks',
};
