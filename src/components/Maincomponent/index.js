import { useState, useEffect } from "react";
import { Box, Center, SimpleGrid, Flex, Text } from "@chakra-ui/react";
import { getData } from "../../api/getData";
import { getDataAll } from "../../api/getDataAll";
import { useQuery } from "@tanstack/react-query";
import { CardComponent} from "../CardComponent/index";

function MainComponent() {
  const { data, isLoading, error } = useQuery(["wear"], () => getDataAll(), {
    initialData: { data: [] },
  });
  console.log(data);

  return (
    <>
      <Center>
        <Flex w={"70vw"} h={"100vh"} flexDir={"column"}>
          <Text margin={"0 auto"} lineHeight={"10vh"} fontSize={"2xl"}>
            신사무 랭킹
          </Text>
          <Flex>
            <CardComponent data={data.data} type={"상의"}/>
            <CardComponent data={data.data} type={"바지"}/>
            <CardComponent data={data.data} type={"아우터"}/>
          </Flex>
        </Flex>
      </Center>
    </>
  );
}

export default MainComponent;
