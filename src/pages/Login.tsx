import KakaoLoginButton from '@/components/Login/KakaoLoginButton';
import NaverLoginButton from '@/components/Login/NaverLoginButton';
import { LOGIN_STYLE } from '@/constants/styles';
import Header from '@/components/common/Header';

const Login = () => {
  // const { isLoggedIn } = useAuthStore();

  // if (isLoggedIn) return <Navigate to={ROUTE_URL_FULL.IMAGE} />;

  return (
    <div className={LOGIN_STYLE.loginBox}>
      <Header headerTitle="로그인" />
      <p className={LOGIN_STYLE.paragraph}>SNS 계정으로 로그인하기</p>
      <div className={LOGIN_STYLE.buttonBox}>
        <KakaoLoginButton />
        <NaverLoginButton />
      </div>
    </div>
  );
};

export default Login;
