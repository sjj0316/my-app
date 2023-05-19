import {useState,useEffect} from 'react';
import { Box, Center,SimpleGrid,Flex, Text } from '@chakra-ui/react'
import { getData } from '../../api/getData';

function MainComponent() {
    const [data, setData] = useState([])
    useEffect(() => {
        getData().then((res) =>{
            setData(res.data);
        })
    }, [])
  return (
    <>
        <Center>
            <Flex w={"40vh"} h={"100vh"} 
            flexDir={"column"}
             >
                <Text margin={"0 auto"} 
                lineHeight={"10vh"} fontSize={"2xl"}
                >신사무 랭킹</Text>
               <SimpleGrid 
               bg={"#eee"}
               columns={1} 
               spacingY={5} 
               padding={5}>
                {data.map((item, index) => {
                    return( <Box height='100px'  border="1px"> 
                
                    <Text>[72시간특가]남성 보크 플라워 폴로 반소매 티셔츠 - 블랙 / FC65PO0024PU99J</Text>
                    <Flex 
                    marginTop={3}
                    height={"60px"} 
                    flexDir={"row"} 
                    justifyContent={"space-between"}>
                        <Text>145,000원</Text> 
                        <Text w={"70px"} 
                        textAlign={"center"}>상의</Text>
                    </Flex>
                </Box>)
                })}
               
                </SimpleGrid> 
            </Flex>
        </Center>
    </>
  );
}

export default MainComponent;