import { useAuth0 } from "@auth0/auth0-react";

import styles from './Header.module.css';

const Header : React.FC = () => {
  return (
    <header className={styles.Header}>
      <h1 className={styles.Title}>Nachbartiere</h1>
    </header>
  );
}

export default Header;