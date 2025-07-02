import { ErrorBoundary } from 'react-error-boundary';
import GlobalErrorFallback from './GlobalErrorFallback';

type GlobalErrorBoundaryProps = {
  children: React.ReactNode;
};

const GlobalErrorBoundary = ({ children }: GlobalErrorBoundaryProps) => {
  return (
    <ErrorBoundary FallbackComponent={GlobalErrorFallback}>
      {children}
    </ErrorBoundary>
  );
};

export default GlobalErrorBoundary;
