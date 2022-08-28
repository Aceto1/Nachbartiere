import * as React from 'react';
import CustomSwitch from '../../HoC/CustomSwitch/CustomSwitch';
import Footer from '../Footer/Footer';

const Layout: React.FC = () => {
  return (
    <div>
      <CustomSwitch />
      <Footer />
    </div>
  );
}

export default Layout;