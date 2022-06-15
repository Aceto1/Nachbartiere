import { Routes, Route } from 'react-router-dom';
import Camera from '../../Pages/Camera/Camera';
import Homepage from '../../Pages/Homepage/Homepage';
import Login from '../../Pages/Login/Login';
import User from '../../Pages/User/User';
import { ProtectedRoute } from '../ProtectedRoute/ProtectedRoute';

const CustomSwitch: React.FC = () => {
  return (
    <Routes>
      <Route element={<Login />} path='/login' />
      <Route element={<ProtectedRoute component={Homepage} />} path='/' />
      <Route element={<ProtectedRoute component={User} />} path='/user' />
      <Route element={<ProtectedRoute component={Camera} />} path='/camera' />
    </Routes>
  );
}

export default CustomSwitch;