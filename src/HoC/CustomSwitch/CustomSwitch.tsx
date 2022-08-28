import { Routes, Route } from 'react-router-dom';
import Camera from '../../Pages/Camera/Camera';
import Homepage from '../../Pages/Homepage/Homepage';
import Auth from '../../Pages/Auth/Auth';
import User from '../../Pages/User/User';
import { ProtectedRoute } from '../ProtectedRoute/ProtectedRoute';
import Login from '../../Pages/Login/Login';
import SignUp from '../../Pages/SignUp/SignUp';
import Logout from '../../Pages/Logout/Logout';
import Privacy from '../../Pages/Privacy/Privacy';
import SightingType from '../../Pages/Sighting/Sighting';
import AllAchievements from '../../Pages/AllAchievements/AllAchievements';
import AllSightings from '../../Pages/AllSightings/AllSightings';

const CustomSwitch: React.FC = () => {
  return (
    <Routes>
      <Route element={<Auth />} path='/auth' />
      <Route element={<Login />} path='/login' />
      <Route element={<SignUp />} path='/signup' />
      <Route element={<Logout />} path='/logout' />
      <Route element={<Privacy />} path='/data-privacy' />
      <Route element={<ProtectedRoute />} path='/user'>
        <Route path='/user' element={<User />} />
      </Route>
      <Route element={<ProtectedRoute />} path='/sightings'>
        <Route path='/sightings' element={<AllSightings />} />
      </Route>
      <Route element={<ProtectedRoute />} path='/achievements'>
        <Route path='/achievements' element={<AllAchievements />} />
      </Route>
      <Route element={<ProtectedRoute />} path='/sighting/:id'>
        <Route path='/sighting/:id' element={<SightingType />} />
      </Route>
      <Route element={<ProtectedRoute />} path='/camera'>
        <Route path='/camera' element={<Camera />} />
      </Route>
      <Route element={<ProtectedRoute />} path='/'>
        <Route path='/' element={<Homepage />} />
      </Route>
    </Routes>
  );
}

export default CustomSwitch;