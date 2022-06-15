import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { Icon, Link as UILink } from "@chakra-ui/react";
import { MdPerson, MdCameraAlt, MdHome } from 'react-icons/md'

import styles from './Footer.module.css';

const Footer: React.FC = () => {
  const { isAuthenticated } = useAuth0();

  if (!isAuthenticated)
    return null;

  return (
    <footer className={styles.Footer}>
      <UILink as={Link} to='/'>
        <Icon as={MdHome} height='2.5em' width='2.5em' />
      </UILink>
      <UILink as={Link} to='/camera'>
        <Icon as={MdCameraAlt} height='2.5em' width='2.5em' />
      </UILink>
      <UILink as={Link} to='/user'>
        <Icon as={MdPerson} height='2.5em' width='2.5em' />
      </UILink>
    </footer>
  );
}

export default Footer;