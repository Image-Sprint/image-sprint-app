import { postLogin } from '@/api/login';
import { ACCESS_TOKEN_KEY } from '@/constants/api';
import { ROUTE_URL_FULL } from '@/constants/routers';
import { useAuthStore } from '@/stores/authStore';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

const useLoginMutation = () => {
  const navigate = useNavigate();
  const { setIsLoggedIn } = useAuthStore();

  const loginMutation = useMutation({
    mutationFn: postLogin,
    onSuccess: ({ data: { accessToken } }) => {
      setIsLoggedIn(true);
      localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
      navigate(ROUTE_URL_FULL.IMAGE);
    },
    onError(error) {
      console.error('로그인에 실패했습니다.', error);
      setIsLoggedIn(false);
      navigate(ROUTE_URL_FULL.LOGIN);
    },
  });

  return { mutateLogin: loginMutation.mutate };
};

export default useLoginMutation;
