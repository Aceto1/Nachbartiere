import { ChakraProvider } from '@chakra-ui/react'
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter as Router } from 'react-router-dom';

import Layout from '../Layout/Layout';
import './App.css';

function App() {
  return (
    <Router>
      <ChakraProvider>
        <Auth0Provider
          domain={process.env.REACT_APP_AUTH0_DOMAIN ?? ""}
          clientId={process.env.REACT_APP_AUTH0_CLIENT_ID ?? ""}
          audience={process.env.REACT_APP_AUTH0_AUDIENCE ?? ""}
          redirectUri={window.location.origin}
          useRefreshTokens
          cacheLocation="localstorage">
          <Layout />
        </Auth0Provider>
      </ChakraProvider>
    </Router>
  );
}

export default App;
