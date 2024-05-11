import React from "react";
import { Box, Flex, Text, Button, Image, Heading } from "@chakra-ui/react";

export function Home() {
  return (
    <Box bgGradient="linear(to-tr, #595732, #3f3f3a)" color="white" overflow="hidden">
      <Flex
        direction={{ base: "column", md: "row" }}
        ml={{ base: 0, lg: "50px" }}
        minH="calc(100vh - 8vh)"
      >
        <Box
          width={{ base: "100%", md: "50%" }}
          p={{ base: 6, lg: 10 }}
          textAlign={{ base: "center" }}
        >
          <Heading size="2xl" color="white">
            Feel Great. <br />
            Body and Mind.
          </Heading>
          <Text fontSize={{ base: "lg", md: "xl" }} color="gray.300" mt={6}>
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
            fontSize={{ base: "3xl", lg: "5xl" }}
            position="absolute"
            bottom="0"
            left="50%"
            transform="translateX(-50%)"
          >
            Exercise
          </Text>
        </Box>
        <Flex justify="center" width={{ base: "100%", md: "50%" }} zIndex={2}>
          <Image
            src="/banner.png"
            alt="banner"
            className="banner-img"
            boxSize={{ base: "auto", lg: "100vh" }}
            maxWidth="100%"
            // maxHeight={{ base: "50vh", lg: "100%" }}
            overflow="hidden"
          />
        </Flex>
      </Flex>
    </Box>
  );
}
