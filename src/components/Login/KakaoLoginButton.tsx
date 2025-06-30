import { LOGIN_STYLE } from '@/constants/styles';

const KakaoLoginButton = () => {
  const handleLogin = () => {
    const authUrl = 'https://kauth.kakao.com/oauth/authorize';
    const redirectUri = encodeURIComponent(
      import.meta.env.VITE_KAKAO_REDIRECT_URI
    );

    const url = `${authUrl}?response_type=code&client_id=${import.meta.env.VITE_KAKAO_CLIENT_ID}&redirect_uri=${redirectUri}`;

    window.location.href = url;
  };

  return (
    <button onClick={handleLogin} className="w-12 h-12">
      <img
        src="/src/assets/icons/login_icon_kakao.png"
        alt="카카오 로그인"
        className={LOGIN_STYLE.button}
      />
    </button>
  );
};

export default KakaoLoginButton;
