import { Button } from '@chakra-ui/react'
import { useAuth0 } from "@auth0/auth0-react";

import styles from './HomePage.module.css';

const HomePage: React.FC = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className={styles.container}>
      
      <div className={styles.Ellipse1} />
      <div className={styles.Ellipse2} />

      <Button className={styles.LoginButton} color="#fff" background="#338973" size="lg" width="12rem" onClick={() => loginWithRedirect()}>Log In</Button>;
      <p className={styles.WelcomeText}>Willkommen bei <b>NACHBARTIERE</b></p>
      <p>Behalte deine kleinen Nachbarn im Auge mit Nachbartiere</p>
    </div>
  );
}

export default HomePage;