import {ChakraProvider} from '@chakra-ui/react';
import MainComponent from './components/Maincomponent';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

function App() {

    const queryClient = new QueryClient()

    return (
        <QueryClientProvider client={queryClient}>
            <ChakraProvider>
                <MainComponent/>
            </ChakraProvider>
        </QueryClientProvider>
    )
}

export default App;
