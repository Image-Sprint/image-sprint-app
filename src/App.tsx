import { Navigate, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import { ROUTE_STRING, ROUTE_URL_FULL } from './constants/routers';
import Home from './pages/Home';
import Image from './pages/Home/Image';
import Job from './pages/Home/Job';
import Notification from './pages/Home/Notification';
import Profile from './pages/Home/Profile';
import LoginErrorBoundary from './pages/Error/LoginErrorBoundary';
import OauthRedirect from './pages/OauthRedirect';
import '@/api/axiosInterceptors';
import GuardedRoute from './pages/GuardedRoute';
import GlobalErrorPage from './pages/Error/GlobalErrorPage';

function App() {
  return (
    <Routes>
      {/* 공개 라우트 */}
      <Route path="/" element={<Login />} />
      <Route path={ROUTE_STRING.LOGIN} element={<Login />} />
      <Route
        path={ROUTE_STRING.OAUTH_REDIRECT}
        element={
          <LoginErrorBoundary>
            <OauthRedirect />
          </LoginErrorBoundary>
        }
      />

      {/* 보호된 라우트 */}
      <Route element={<GuardedRoute />}>
        <Route path={ROUTE_STRING.HOME} element={<Home />}>
          <Route index element={<Navigate to={ROUTE_STRING.IMAGE} replace />} />
          <Route path={ROUTE_STRING.IMAGE} element={<Image />} />
          <Route path={ROUTE_STRING.JOB} element={<Job />} />
          <Route path={ROUTE_STRING.NOTIFICATION} element={<Notification />} />
          <Route path={ROUTE_STRING.PROFILE} element={<Profile />} />
        </Route>
      </Route>

      {/* 에러 fallback 전용 라우트 */}
      <Route path="/error" element={<GlobalErrorPage />} />

      {/* 다른 모든 경로는 홈으로 */}
      <Route
        path="*"
        element={<Navigate to={ROUTE_URL_FULL.IMAGE} replace />}
      />
    </Routes>
  );
}

export default App;
