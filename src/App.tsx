import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import { ROUTE_STRING } from './constants/routers';
import Home from './pages/Home';
import Image from './pages/Home/Image';
import Job from './pages/Home/Job';
import Notification from './pages/Home/Notification';
import User from './pages/Home/User';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route path={ROUTE_STRING.LOGIN} element={<Login />} />
      <Route path={ROUTE_STRING.HOME} element={<Home />}>
        <Route path={ROUTE_STRING.IMAGE} element={<Image />} />
        <Route path={ROUTE_STRING.JOB} element={<Job />} />
        <Route path={ROUTE_STRING.NOTIFICATION} element={<Notification />} />
        <Route path={ROUTE_STRING.USER} element={<User />} />
      </Route>
    </Routes>
  );
}

export default App;
