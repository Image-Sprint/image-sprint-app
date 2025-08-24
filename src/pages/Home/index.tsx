import Header from '@/components/common/Header';
import { Outlet, useLocation } from 'react-router-dom';
import { ROUTE_STRING } from '@/constants/routers';
import { LAYOUT_STYLE } from '@/constants/styles';
import NavigationBar from '@/components/common/NavigationBar';

const Home = () => {
  const { pathname } = useLocation();
  const pathSegments = pathname.split('/');
  const subPath = pathSegments[pathSegments.length - 1];

  const getTitle = (path: string) => {
    switch (path) {
      case ROUTE_STRING.IMAGE:
        return '이미지 변환';
      case ROUTE_STRING.JOB:
        return '변환 결과';
      case ROUTE_STRING.NOTIFICATION:
        return '알림 목록';
      case ROUTE_STRING.PROFILE:
        return '마이 페이지';
    }
    return '';
  };

  return (
    <div className={LAYOUT_STYLE.screenLayout}>
      <NavigationBar />
      <div className={LAYOUT_STYLE.mainContainer}>
        <div className={LAYOUT_STYLE.pageContent}>
          <Header headerTitle={getTitle(subPath)} />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Home;
