import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from 'react'
import { ChakraProvider } from '@chakra-ui/react';
import MainComponent from './components/Maincomponent';

function App() {
  const [number, setNumber] = useState(0);
  
  return (
    <ChakraProvider>
        <MainComponent/>
    </ChakraProvider>
    );
}

export default App;
