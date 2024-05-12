import {
  Box,
  Flex,
  Heading,
  Stack,
  Text,
  Image,
  Grid,
  Center,
} from "@chakra-ui/react";

const BoxElement = ({ imageSrc, heading, description }) => (
  <Center>
    <Box borderWidth="0" maxW={"sm"} m="2" justify={"center"}>
      <Flex direction="column" justifyContent="center" alignItems="center">
        <Image src={imageSrc} alt={heading} boxSize={"200px"} />
        <Heading fontWeight={"none"} fontSize={"25px"} mb={3}>
          {heading}
        </Heading>
        <Text>{description}</Text>
      </Flex>
    </Box>
  </Center>
);

export function About() {
  return (
    <Stack backgroundColor={"gray.200"}>
      <Stack px={{ base: 2, md: 20 }} py={{ base: 2, md: 10 }}>
        <Flex align={"center"} direction={"column"} textAlign={"center"}>
          <Heading mb={4}>OUR VALUES</Heading>
          <Text>
            We live and breathe our six core values and six brand promises —
            they serve as the backbone of our operations and speak of our
            commitment to improving the lives of our customers, supporting our
            team, championing industry standards, and driving our business with
            integrity and passion.
          </Text>
        </Flex>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          gap={4}
          textAlign={"center"}
        >
          <BoxElement
            imageSrc={"./image-1.avif"}
            heading={"People Centric"}
            description={
              "Prioritising the happiness and wellbeing of our team members, customers, and stakeholders before all else."
            }
          />

          <BoxElement
            imageSrc={"./image-2.avif"}
            heading={"'Nimbagility'"}
            description={
              "Combining nimble actions with agile thinking to approach challenges, fostering resilience through creative and efficient problem-solving."
            }
          />
          <BoxElement
            imageSrc={"./image-3.avif"}
            heading={"'Continuous Improvement"}
            description={
              "Constantly seeking new ways to grow, learn, and innovate — embracing and leading change as a catalyst for progress."
            }
          />
          <BoxElement
            imageSrc={"./image-4.avif"}
            heading={"Collaboration"}
            description={`Working together with effective communication, mutual respect
            and individual ownership to achieve shared goals and collective
            accountability.`}
          />
          <BoxElement
            imageSrc={"./image-5.avif"}
            heading={"Empathy"}
            description={`Demonstrating kindness, compassion and understanding towards
            others to cultivate deeper relationships and create a positive
            impact.`}
          />
          <BoxElement
            imageSrc={"./image-6.avif"}
            heading={"'Inclusivity"}
            description={`Cultivating a culture that welcomes differences, celebrates
            unique perspectives, and provides a respectful and nurturing
            environment.`}
          />
        </Grid>
      </Stack>
    </Stack>
  );
}
