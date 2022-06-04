import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../Layout/Layout';
import './App.css';

function App() {
  return (
    <ChakraProvider>
      <Layout />
    </ChakraProvider>
  );
}

export default App;
