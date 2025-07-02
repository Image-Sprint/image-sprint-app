import { ROUTE_URL_FULL } from '@/constants/routers';
import { useAuthStore } from '@/stores/authStore';
import { Navigate, Outlet } from 'react-router-dom';

const GuardedRoute = () => {
  const { isLoggedIn } = useAuthStore();

  return isLoggedIn ? <Outlet /> : <Navigate to={ROUTE_URL_FULL.LOGIN} />;
};

export default GuardedRoute;
