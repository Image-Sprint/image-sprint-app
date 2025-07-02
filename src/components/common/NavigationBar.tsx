import { Menu } from 'lucide-react';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import logo from '@/assets/icons/icon_logo.png';
import { NAV_MENU_ITEM_LIST } from '@/constants/common/components';
import { NAVIGATION_BAR_STYLE as style } from '@/constants/styles';

const NavigationBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleMenuClick = (path: string) => {
    setIsMobileMenuOpen(false); // 모바일 메뉴 닫기
    navigate(path);
  };

  const isActive = (path: string) => pathname === path;

  return (
    <header className={style.container}>
      {/* 왼쪽: 로고 + 메뉴 */}
      <div className={style.leftGroup}>
        <div
          className={style.logoButton}
          onClick={() => navigate('/home/image')}
        >
          <img src={logo} alt="logo" className={style.logoImage} />
          <span className={style.logoText}>ImageSprint</span>
        </div>

        {/* 데스크탑 메뉴 */}
        <nav className={style.desktopNav}>
          {NAV_MENU_ITEM_LIST.map(({ path, label, icon: Icon }) => (
            <button
              key={path}
              className={`${style.navButtonBase} ${
                isActive(path) ? style.navButtonActive : style.navButtonInactive
              }`}
              onClick={() => handleMenuClick(path)}
            >
              <Icon className="w-6 h-6" />
              <span>{label}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* 모바일: 햄버거 메뉴 */}
      <button
        className={style.mobileMenuButton}
        onClick={() => setIsMobileMenuOpen((prev) => !prev)}
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* 모바일 메뉴 드롭다운 */}
      {isMobileMenuOpen && (
        <div className={style.mobileDropdown}>
          {NAV_MENU_ITEM_LIST.map(({ path, label, icon: Icon }) => (
            <button
              key={path}
              className={`${style.navButtonBase} ${
                isActive(path) ? style.navButtonActive : style.navButtonInactive
              }`}
              onClick={() => handleMenuClick(path)}
            >
              <Icon className="w-6 h-6" />
              <span>{label}</span>
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

export default NavigationBar;
