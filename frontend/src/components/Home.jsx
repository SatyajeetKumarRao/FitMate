import React from "react";
import {
  Box,
  Flex,
  Text,
  Center,
  Heading,
  Button,
  Image,
  Stack,
} from "@chakra-ui/react";
import NavBar from "./Navbar";

export function Home() {
  return (
    <Box bgGradient="linear(to-tr, #595732, #3f3f3a)" minH="100vh" color={"white"}>
      <NavBar/>
      <Flex ml={"50px"}>
        <Box width={"50%"} p={"100px"}>
          <Heading size="2xl" color="white">
          Feel Great.<br/>
          Body and Mind.
          </Heading>
          <Text size={"xl"} color="gray.300" mt={6}>
            Choose from hundreds of workouts, healthy <br />
            recipes, relaxing meditations, and expert <br />
            articles, for a whole body and mind <br />
            approach to feeling great
          </Text>
          <Flex>
            <Button m={4} backgroundColor={"#fff000"}>Start Training</Button>
          </Flex>
        </Box>
        <Flex pt={4} width={'50%'}>
            <Image src="banner.png"/>
        </Flex>
        </Flex>
    </Box>
  );
}

