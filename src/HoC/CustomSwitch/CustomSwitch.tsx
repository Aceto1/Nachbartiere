import { Routes, Route } from 'react-router-dom';
import HomePage from '../../Components/HomePage/HomePage';

const CustomSwitch: React.FC = () => {
  return (
    <Routes>
      <Route element={<HomePage />} path='/' />
    </Routes>
  );
}

export default CustomSwitch;