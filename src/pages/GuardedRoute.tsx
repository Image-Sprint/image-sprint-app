import { ROUTE_URL_FULL } from '@/constants/routers';
import { useAuthStore } from '@/stores/authStore';
import { useEffect } from 'react';
import { Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom';

const GuardedRoute = () => {
  const { isLoggedIn, authError } = useAuthStore();
  const location = useLocation();
  const navigate = useNavigate();

  const isConverting = location.pathname === ROUTE_URL_FULL.CONVERTING;
  const fromImage = location.state?.from === 'image';

  useEffect(() => {
    if (isConverting && !fromImage) {
      navigate(ROUTE_URL_FULL.IMAGE, { replace: true });
    }
  }, [isConverting, fromImage, navigate]);

  if (!isLoggedIn) {
    return authError ? (
      <Navigate to="/error" replace />
    ) : (
      <Navigate to={ROUTE_URL_FULL.LOGIN} replace />
    );
  }

  if (isConverting && !fromImage) {
    return null; // 리디렉트 중 렌더링 막기
  }

  return <Outlet />;
};
export default GuardedRoute;
