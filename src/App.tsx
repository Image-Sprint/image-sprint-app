import { Navigate, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import { ROUTE_STRING } from './constants/routers';
import Home from './pages/Home';
import Image from './pages/Home/Image';
import Job from './pages/Home/Job';
import Notification from './pages/Home/Notification';
import User from './pages/Home/User';
import LoginErrorBoundary from './pages/Error/LoginErrorBoundary';
import OauthRedirect from './pages/OauthRedirect';

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
        <Route path={ROUTE_STRING.USER} element={<User />} />
      </Route>
    </Routes>
  );
}

export default App;
