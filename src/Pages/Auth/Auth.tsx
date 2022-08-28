import { useAuth0 } from '@auth0/auth0-react';
import { Button, Link } from '@chakra-ui/react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';

import styles from './Auth.module.css';

const Auth: React.FC = () => {
  const { isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(isAuthenticated);
    if (isAuthenticated)
      navigate("/");
  }, [isAuthenticated, navigate])

  return (
    <div className={styles.container}>

      <div className={styles.Ellipse1} />
      <img className={styles.Frog} src='/frog.svg' alt='frog' />
      <div className={styles.Ellipse2} />

      <Link as={RouterLink} to="/login">
        <Button className={styles.LoginButton} color="#fff" background="#338973" size="lg" width="12rem">Einloggen</Button>
      </Link>
      <Link as={RouterLink} to="/signup">
        <Button className={styles.SignUpButton} color="#fff" background="#338973" size="lg" width="12rem">Registrieren</Button>
      </Link>
      <p className={styles.WelcomeText}>Willkommen bei <b>NACHBARTIERE</b></p>
      <p>Behalte deine kleinen Nachbarn im Auge mit Nachbartiere</p>
    </div>
  );
}

export default Auth;