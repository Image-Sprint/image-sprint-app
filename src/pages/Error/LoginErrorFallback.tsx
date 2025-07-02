import { ROUTE_URL_FULL } from '@/constants/routers';
import { LOGIN_ERROR_FALLBACK_STYLE } from '@/constants/styles';
import { useNavigate } from 'react-router-dom';

type LoginErrorFallbackProps = {
  error: Error;
  resetErrorBoundary: () => void;
};

const LoginErrorFallback = ({
  error,
  resetErrorBoundary,
}: LoginErrorFallbackProps) => {
  const navigate = useNavigate();

  const handleGoToLogin = () => {
    resetErrorBoundary();
    navigate(ROUTE_URL_FULL.LOGIN);
  };

  return (
    <div className={LOGIN_ERROR_FALLBACK_STYLE.container}>
      <h1 className={LOGIN_ERROR_FALLBACK_STYLE.title}>오류 발생</h1>
      <p className={LOGIN_ERROR_FALLBACK_STYLE.paragraph}>{error.message}</p>
      <button
        onClick={handleGoToLogin}
        className={LOGIN_ERROR_FALLBACK_STYLE.button}
      >
        로그인 페이지로 이동
      </button>
    </div>
  );
};

export default LoginErrorFallback;
