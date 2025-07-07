import { ROUTE_URL_FULL } from '@/constants/routers';
import { useAuthStore } from '@/stores/authStore';
import { Navigate, Outlet } from 'react-router-dom';

const GuardedRoute = () => {
  const { isLoggedIn, authError } = useAuthStore();

  if (!isLoggedIn) {
    return authError ? (
      <Navigate to="/error" replace />
    ) : (
      <Navigate to={ROUTE_URL_FULL.LOGIN} replace />
    );
  }

  return <Outlet />;
};

export default GuardedRoute;
