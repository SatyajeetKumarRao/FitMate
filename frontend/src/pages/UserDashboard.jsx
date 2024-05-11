import NavBar from "../components/Navbar";
import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import { Chart } from "react-google-charts";

const newDataObject = {
  Goal: 11,
  Net: 8,
};

const convertObjectToArray = (dataObject) => {
  // Initialize an array with the header row
  const dataArray = [["Task", "Hours per Day"]];

  // Iterate over each key-value pair in the object
  Object.entries(dataObject).forEach(([task, hours]) => {
    // Push an array containing the key and value into the dataArray
    dataArray.push([task, hours]);
  });

  return dataArray;
};

// Usage
const data = convertObjectToArray(newDataObject);
const options = {
  title: "Daily Calorie Burned",
  is3D: true,
};
const UserDashboard = () => {
  return (
    <Box
      bgGradient="linear(to-tr, #595732, #3f3f3a)"
      minH="100vh"
      color="white"
    >
      <NavBar />
      <Box mt="16px">
        <Heading as="h4" size="lg" color="white" pl="10">
          Dashboard
        </Heading>
        <SimpleGrid
          columns={{ sm: 2, md: 3 }}
          spacing="8"
          p="10"
          textAlign="center"
          color="gray.400"
        >
          <Box boxShadow="base" p="6" rounded="md" bg="white">
            Goal
          </Box>
          <Box boxShadow="base" p="6" rounded="md" bg="white">
            Food
          </Box>
          <Box boxShadow="base" p="6" rounded="md" bg="white">
            Exercise
          </Box>
        </SimpleGrid>
        <SimpleGrid
          columns={{ sm: 1, md: 2 }}
          spacing="8"
          pl="10"
          pr="10"
          textAlign="center"
          color="gray.400"
        >
          <Box boxShadow="base" p="6" rounded="md" bg="white">
            Base
          </Box>

          <Box boxShadow="base" p="6" rounded="md" bg="white">
            <Chart
              chartType="PieChart"
              data={data}
              options={options}
              width={"100%"}
              height={"150px"}
            />
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default UserDashboard;
