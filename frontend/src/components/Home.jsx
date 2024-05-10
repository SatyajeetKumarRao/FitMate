import React from "react";
import { Box, Flex, Text, Button, Image, Heading } from "@chakra-ui/react";

export function Home() {
  return (
    <Box bgGradient="linear(to-tr, #595732, #3f3f3a)"color="white" overflow="hidden">
      <Flex ml={{ base: "20px", lg: "50px" }} minH="calc(100vh - 8vh)">
        <Box width={{ base: "100%", lg: "50%" }} p={6}>
          <Heading size="2xl" color="white">
            Feel Great. <br />
            Body and Mind.
          </Heading>
          <Text fontSize="xl" color="gray.300" mt={6}>
            Choose from hundreds of workouts, healthy <br />
            recipes, relaxing meditations, and expert <br />
            articles, for a whole body and mind <br />
            approach to feeling great
          </Text>
          <Button m={4} backgroundColor="#FFF200" color="black">
            Start Training
          </Button>
          <Text
            fontWeight={600}
            color="#FFF200"
            opacity="0.3"
            display={{ base: "none", lg: "block" }}
            fontSize="200px"
            position="absolute"
            bottom="0"
            justifyContent="center"
            zIndex="1"
          >
            Exercise
          </Text>
        </Box>
        <Flex justify="center" width={{ base: "100%", lg: "50%" }} zIndex={2}>
          <Image src="/banner.png" alt="banner" className="banner-img" boxSize="100vh" overflow={'hidden'} />
        </Flex>
      </Flex>
    </Box>
  );
}
