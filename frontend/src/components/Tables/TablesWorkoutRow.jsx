import React from "react";
import { Tr, Td, Flex, Text, Icon, Button } from "@chakra-ui/react";

import { IoIosRemoveCircle } from "react-icons/io";

function TablesWorkoutRow(props) {
  const { ExerciseDetails, duration, lastItem } = props;

  console.log(props);

  // const textColor = useColorModeValue("gray.700", "white");
  return (
    <Tr>
      <Td
        minWidth={{ sm: "250px" }}
        ps="0px"
        borderBottomColor="#56577A"
        border={lastItem ? "none" : null}
      >
        <Flex alignItems="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
          <Text fontSize="sm" color="#fff" minWidth="100%">
            {ExerciseDetails.name}
          </Text>
        </Flex>
      </Td>
      <Td borderBottomColor="#56577A" border={lastItem ? "none" : null}>
        <Text fontSize="sm" color="#fff" fontWeight="bold" pb=".5rem">
          {ExerciseDetails.caloriesBurnedPerMinute}
        </Text>
      </Td>
      <Td borderBottomColor="#56577A" border={lastItem ? "none" : null}>
        <Text fontSize="sm" color="#fff" fontWeight="bold" pb=".5rem">
          {duration}
        </Text>
      </Td>

      <Td borderBottomColor="#56577A" border={lastItem ? "none" : null}>
        <Button p="0px" bg="transparent" _hover="none" _active="none">
          <Icon as={IoIosRemoveCircle} color="gray.400" cursor="pointer" />
        </Button>
      </Td>
    </Tr>
  );
}

export { TablesWorkoutRow };
