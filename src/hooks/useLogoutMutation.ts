import { logout } from '@/api/logout';
import { ACCESS_TOKEN_KEY } from '@/constants/api';
import { ROUTE_URL_FULL } from '@/constants/routers';
import { useAuthStore } from '@/stores/authStore';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

const useLogoutMutation = () => {
  const navigate = useNavigate();
  const { setIsLoggedIn } = useAuthStore();

  const logoutMutation = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      setIsLoggedIn(false);
      localStorage.removeItem(ACCESS_TOKEN_KEY);
      navigate(ROUTE_URL_FULL.LOGIN);
    },
    onError(error) {
      console.error('로그아웃에 실패했습니다.', error);
      setIsLoggedIn(false);
      localStorage.removeItem(ACCESS_TOKEN_KEY);
      navigate(ROUTE_URL_FULL.LOGIN);
    },
  });

  return {
    mutateLogout: logoutMutation.mutate,
    isPending: logoutMutation.isPending,
  };
};
export default useLogoutMutation;
