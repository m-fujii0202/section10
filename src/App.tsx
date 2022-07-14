import { ChakraProvider, theme } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import { HeaderLayout } from './components/templates/HeaderLayout';
import { LoginUserProvider } from './providers/LoginUserProvider';
import { Router } from './router/Router';


function App() {
  

  return (
    <div className="App">
      <ChakraProvider theme={theme}>
        <BrowserRouter>
        <HeaderLayout>
        <LoginUserProvider>
        <Router />
        </LoginUserProvider>
        </HeaderLayout>
        </BrowserRouter>
      </ChakraProvider>
    </div>
  );
}

export default App;
