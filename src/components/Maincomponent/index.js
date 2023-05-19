import {useState, useEffect} from 'react';
import { Box } from '@chakra-ui/react'

function MainComponent() {
  return (
        <>  {/* div -> dom 생성 = 불안정 */} 
            <Box w={500} h={500} bg={"red"}></Box>
            <Center>123</Center>
            <SimpleGrid columns={{sm: 2, md: 4}}
            spacing='8'
            p='10'
            textAlign='center'
            rounded='lg'
            color='gray.400'>
                <Box bg={"white"} color={"black"} bg=
            </SimpleGrid>
        </>
    );
}

export default MainComponent;
