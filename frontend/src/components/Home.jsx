import { Box, Flex, Text, Button, Image, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export function Home() {
  const [randomText, setRandomText] = useState("");
  const textOptions = [
    "Exercise",
    "Workout",
    "Fitness",
    "Training",
    "Activity",
  ];
  const getRandomText = () => {
    const randomIndex = Math.floor(Math.random() * textOptions.length);
    return textOptions[randomIndex];
  };

  useEffect(() => {
    setRandomText(getRandomText());
  }, []);

  return (
    <Box
      bgGradient="linear(to-tr, #595732, #3f3f3a)"
      color="white"
      overflow="hidden"
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        ml={{ base: 0, lg: "50px" }}
        minH="calc(100vh - 8vh)"
      >
        <Box
          width={{ base: "100%", md: "50%" }}
          p={{ base: 6, lg: 10 }}
          textAlign={{ base: "center", xl: "start" }}
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
            fontSize={{ base: "100px", lg: "160px" }}
            position="absolute"
            bottom="0"
            // left="40%"
            // transform="translateX(-50%)"
          >
            {randomText}
          </Text>
        </Box>
        <Flex
          justify={{ base: "center", xl: "end" }}
          width={{ base: "100%", md: "50%" }}
          // zIndex={2}
        >
          <Image
            src="/banner.png"
            alt="banner"
            className="banner-img"
            boxSize={{ base: "auto", lg: "90vh", xl: "92vh" }}
            objectFit={"contain"}
            maxWidth="100%"
            // maxHeight={{ base: "50vh", lg: "100%" }}
            overflow="hidden"
          />
        </Flex>
      </Flex>
    </Box>
  );
}
