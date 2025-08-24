import { ErrorBoundary, type FallbackProps } from 'react-error-boundary';
import LoginErrorFallback from '@/pages/Error/LoginErrorFallback';

type LoginErrorBoundaryProps = {
  children: React.ReactNode;
};

const LoginErrorBoundary = ({ children }: LoginErrorBoundaryProps) => {
  return (
    <ErrorBoundary
      fallbackRender={({ error, resetErrorBoundary }: FallbackProps) => (
        <LoginErrorFallback
          error={error}
          resetErrorBoundary={resetErrorBoundary}
        />
      )}
    >
      {children}
    </ErrorBoundary>
  );
};

export default LoginErrorBoundary;
