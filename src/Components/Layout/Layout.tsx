import * as React from 'react';
import CustomSwitch from '../../HoC/CustomSwitch/CustomSwitch';
import Header from '../Header/Header';

const Layout: React.FC = () => {
  return (
    <div>
      <Header />
      <CustomSwitch />
    </div>
  );
}

export default Layout;