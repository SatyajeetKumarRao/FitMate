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

export function Home() {
  return (
    <Box bgGradient="linear(to-tr, #595732, #3f3f3a)" minH="100vh" color={"white"}>
      <Flex as="nav" bg="transparent" justify="space-between" px={4} py={2}>
        <Flex>
            <Box width={"6%"} mr={2}>
                <Image src="logo.png"/>
            </Box>
        <Text fontSize="xl" fontWeight="bold">
          FITMATE
        </Text>
        </Flex>
        <Flex>
            <Center>
          <Text mr={4}>Home</Text>
          <Text mr={4}>About</Text>
          </Center>
        </Flex>
        <Flex>
          <Button  backgroundColor={"transparent"} border={"1px solid white"} mr={4}>Login</Button>
          <Button backgroundColor={"#fff900"} mr={4}>Register</Button>
          </Flex>
      </Flex>
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
        <Flex p={"100px"}>
            <Image src="vite.svg"/>
        </Flex>
        </Flex>
    </Box>
  );
}

