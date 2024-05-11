import {
  Box,
  Flex,
  Heading,
  Stack,
  Text,
  Image,
  Grid
} from "@chakra-ui/react";

export function About() {
  return (
    <Stack backgroundColor={'gray.200'}>
      <Stack px={{ base: 2, md: 20 }} py={{ base: 2, md: 10 }}>
        <Flex align={'center'} direction={'column'} textAlign={'center'}>
          <Heading mb={4}>OUR VALUES</Heading>
          <Text>
            We live and breathe our six core values and six brand promises —
            they serve as the backbone of our operations and speak of our
            commitment to improving the lives of our customers, supporting our
            team, championing industry standards, and driving our business with
            integrity and passion.
          </Text>
        </Flex>
        <Grid templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" , lg : "repeat(3, 1fr)"}} gap={4} textAlign={'center'}>
          <Box borderWidth="0" maxW={'sm'} m="2" justify={'center'}>
            <Image src={'./image-1.avif'} alt="image-1" boxSize={'200px'} ml={{ base: 'auto', md: '70px' }} />
            <Heading fontWeight={'none'} fontSize={'25px'} mb={3}>People Centric</Heading>
            <Text>
              Prioritising the happiness and wellbeing of our team members,
              customers, and stakeholders before all else.
            </Text>
          </Box>
          <Box borderWidth="0" maxW={'sm'} m="2" justify={'center'}>
            <Image src={'./image-2.avif'} alt="image-1" boxSize={'200px'} ml={{ base: 'auto', md: '70px' }} />
            <Heading fontWeight={'none'} fontSize={'25px'} mb={3}>'Nimbagility'</Heading>
            <Text>
              Combining nimble actions with agile thinking to approach challenges, 
              fostering resilience through creative and efficient problem-solving.
            </Text>
          </Box>
          <Box borderWidth="0" maxW={'sm'} m="2" justify={'center'}>
            <Image src={'./image-3.avif'} alt="image-1" boxSize={'200px'} ml={{ base: 'auto', md: '70px' }} />
            <Heading fontWeight={'none'} fontSize={'25px'} mb={3}>Continuous Improvement</Heading>
            <Text>
              Constantly seeking new ways to grow, learn, and 
              innovate — embracing and leading change as a catalyst for progress.
            </Text>
          </Box>
          <Box borderWidth="0" maxW={'sm'} m="2" justify={'center'}>
            <Image src={'./image-4.avif'} alt="image-1" boxSize={'200px'} ml={{ base: 'auto', md: '70px' }} />
            <Heading fontWeight={'none'} fontSize={'25px'} mb={3}>Collaboration</Heading>
            <Text>
              Working together with effective communication, mutual respect and 
              individual ownership to achieve shared goals and collective accountability.
            </Text>
          </Box>
          <Box borderWidth="0" maxW={'sm'} m="2" justify={'center'}>
            <Image src={'./image-5.avif'} alt="image-1" boxSize={'200px'} ml={{ base: 'auto', md: '70px' }} />
            <Heading fontWeight={'none'} fontSize={'25px'} mb={3}>Empathy</Heading>
            <Text>
              Demonstrating kindness, compassion and understanding 
              towards others to cultivate deeper relationships and create a positive impact.
            </Text>
          </Box>
          <Box borderWidth="0" maxW={'sm'} m="2" justify={'center'}>
            <Image src={'./image-6.avif'} alt="image-1" boxSize={'200px'} ml={{ base: 'auto', md: '70px' }} />
            <Heading fontWeight={'none'} fontSize={'25px'} mb={3}>Inclusivity</Heading>
            <Text>
              Cultivating a culture that welcomes differences, celebrates unique perspectives, 
              and provides a respectful and nurturing environment.
            </Text>
          </Box>
        </Grid>
      </Stack>
    </Stack>
  );
}
