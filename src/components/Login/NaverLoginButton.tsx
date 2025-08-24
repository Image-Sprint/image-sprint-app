import { LOGIN_STYLE } from '@/constants/styles';

const NaverLoginButton = () => {
  const handleLogin = () => {
    const authUrl = 'https://nid.naver.com/oauth2.0/authorize';
    const clientId = import.meta.env.VITE_NAVER_CLIENT_ID;
    const redirectUri = encodeURIComponent(
      import.meta.env.VITE_NAVER_REDIRECT_URI
    );
    const state = Math.random().toString(36).substring(2, 15);

    const url = `${authUrl}?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&state=${state}`;

    window.location.href = url;
  };

  return (
    <button onClick={handleLogin} className="w-12 h-12">
      <img
        src="/src/assets/icons/login_icon_naver.png"
        alt="네이버 로그인"
        className={LOGIN_STYLE.button}
      />
    </button>
  );
};

export default NaverLoginButton;
