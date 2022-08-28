import { useAuth0 } from "@auth0/auth0-react";
import { Spinner } from "@chakra-ui/react";
import { useEffect } from "react";

const Logout: React.FC = () => {
  const { logout } = useAuth0();

  useEffect(() => {
    logout({
      returnTo: window.origin + '/auth',
    });
  }, [logout]);

  return <Spinner
    thickness="4px"
    speed="0.65s"
    emptyColor="gray.200"
    color="blue.500"
    size="xl"
    top='50%'
    left='50%'
    transform='translate(-50%, -50%)'
    position='fixed'
  />;
}

export default Logout;