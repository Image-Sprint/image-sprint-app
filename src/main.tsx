import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import {
  QueryClient,
  QueryClientProvider,
  type QueryClientConfig,
} from '@tanstack/react-query';
import { API_RETRY_COUNT, API_STALE_TIME } from './constants/api.ts';
import GlobalErrorBoundary from './pages/Error/GlobalErrorBoundary.tsx';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
      retry: API_RETRY_COUNT,
      staleTime: API_STALE_TIME,
      refetchOnWindowFocus: true,
      refetchOnMount: true,
    },
  },
} as QueryClientConfig);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <GlobalErrorBoundary>
          <App />
        </GlobalErrorBoundary>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
);
