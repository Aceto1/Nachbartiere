import { useAuth0 } from "@auth0/auth0-react";
import { Heading, Spinner } from "@chakra-ui/react";

import styles from './User.module.css';

const User: React.FC = () => {
  const { user, isLoading } = useAuth0();

  if (isLoading)
    return <Spinner />;

  return (
    <div className={styles.container}>
      <Heading>Hallo, {user?.nickname}!</Heading>
      <div>
        <div>
          Sichtungen: <br/> 7
        </div>
        <div>
          Verschiedene Tierarten: <br/> 3
        </div>
      </div>
    </div>
  );
}

export default User;