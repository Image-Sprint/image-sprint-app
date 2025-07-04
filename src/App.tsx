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

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path={ROUTE_STRING.OAUTH_REDIRECT}
        element={
          <LoginErrorBoundary>
            <OauthRedirect />
          </LoginErrorBoundary>
        }
      />
      <Route path={ROUTE_STRING.LOGIN} element={<Login />} />
      <Route path={ROUTE_STRING.HOME} element={<Home />}>
        <Route index element={<Navigate to={ROUTE_STRING.IMAGE} replace />} />
        <Route path={ROUTE_STRING.IMAGE} element={<Image />} />
        <Route path={ROUTE_STRING.JOB} element={<Job />} />
        <Route path={ROUTE_STRING.NOTIFICATION} element={<Notification />} />
        <Route path={ROUTE_STRING.PROFILE} element={<Profile />} />
      </Route>

      <Route
        path="*"
        element={<Navigate to={ROUTE_URL_FULL.IMAGE} replace />}
      />
    </Routes>
  );
}

export default App;
