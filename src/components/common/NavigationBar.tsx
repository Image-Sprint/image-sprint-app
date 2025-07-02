import { Menu } from 'lucide-react';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import logo from '@/assets/icons/icon_logo.png';
import { NAV_MENU_ITEM_LIST } from '@/constants/common/components';

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
    <header className="relative flex items-center justify-between px-4 py-5 shadow-md bg-white">
      {/* 왼쪽: 로고 + 메뉴 */}
      <div className="flex items-center space-x-24">
        <div
          className="flex items-center space-x-2 cursor-pointer"
          onClick={() => navigate('/home/image')}
        >
          <img src={logo} alt="logo" className="w-6 h-6" />
          <span className="text-xl font-bold text-blue-600">ImageSprint</span>
        </div>

        {/* 데스크탑 메뉴 */}
        <nav className="hidden md:flex space-x-24 text-gray-600 font-medium">
          {NAV_MENU_ITEM_LIST.map(({ path, label, icon: Icon }) => (
            <button
              key={path}
              className={`flex items-center space-x-1 ${
                isActive(path)
                  ? 'text-blue-600 font-semibold'
                  : 'hover:text-blue-600'
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
        className="md:hidden text-gray-600"
        onClick={() => setIsMobileMenuOpen((prev) => !prev)}
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* 모바일 메뉴 드롭다운 */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full flex flex-col bg-white shadow-md z-20 px-4 py-2 md:hidden text-gray-600 font-medium space-y-2">
          {NAV_MENU_ITEM_LIST.map(({ path, label, icon: Icon }) => (
            <button
              key={path}
              className={`flex items-center space-x-1 ${
                isActive(path)
                  ? 'text-blue-600 font-semibold'
                  : 'hover:text-blue-600'
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
