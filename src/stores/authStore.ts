import type { AxiosError } from 'axios';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AuthState {
  isLoggedIn: boolean;
  authError: AxiosError | null;
  setIsLoggedIn: (value: boolean) => void;
  setAuthError: (error: AxiosError | null) => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isLoggedIn: false,
      authError: null,
      setIsLoggedIn: (value) => set({ isLoggedIn: value }),
      setAuthError: (error) => set({ authError: error }),
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({ isLoggedIn: state.isLoggedIn }), // authError는 세션에 저장 안 함
    }
  )
);

export const authStore = useAuthStore.getState();
