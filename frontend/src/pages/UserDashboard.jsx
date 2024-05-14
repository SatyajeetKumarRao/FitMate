import {
  Stat,
  StatLabel,
  StatNumber,
  Box,
  SimpleGrid,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  useDisclosure,
  IconButton,
  useToast,
  CardHeader,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
} from "@chakra-ui/react";
import "../styles/fonts/material-design-iconic-font/css/material-design-iconic-font.min.css";

import bgBody from "../assets/img/background-body-admin.png";

import {
  Card,
  CardBody,
  Flex,
  Icon,
  Spacer,
  StatHelpText,
  Text,
} from "@chakra-ui/react";
import medusa from "../assets/img/cardimgfree.png";

import { BsArrowRight } from "react-icons/bs";

import { IoIosAddCircle } from "react-icons/io";
import { SearchIcon } from "@chakra-ui/icons";

import "../styles/Dashboard/styles.css";

import food from "../styles/images/food.png";
import workout from "../styles/images/workout.png";
import net from "../styles/images/net calories.png";
import balance from "../styles/images/balance.png";
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { BASE_URL } from "../utils/vars";
import { TablesFoodRow } from "../components/Tables/TablesFoodRow";
import { TablesWorkoutRow } from "../components/Tables/TablesWorkoutRow";

const UserDashboard = () => {
  const mealModal = useDisclosure();
  const workoutModal = useDisclosure();
  const toast = useToast();
  const initialRef = useRef(null);
  const finalRef = useRef(null);

  const { auth } = useContext(AuthContext);

  const [searchMeal, setSearchMeal] = useState("");
  const [searchWorkout, setSearchWorkout] = useState("");

  const [fetchedFood, setFetchedFood] = useState(null);
  const [fetchedExercises, setFetchedExercises] = useState(null);

  const [addNewFood, setAddNewFood] = useState([]);
  const [addNewExercise, setAddNewExercise] = useState([]);

  const [userCalories, setUsersCalories] = useState(null);
  const [userTargetTDEE, setuserTargetTDEE] = useState(0);
  const [userName, setUserName] = useState("");

  const [usersMeals, setUsersMeals] = useState(null);
  const [usersWorkout, setUsersWorkouts] = useState(null);

  const fetchDailyLogs = () => {
    fetch(`${BASE_URL}/dailyLog/`, {
      headers: {
        Authorization: `Bearer ${auth.accessToken}`,
      },
    })
      .then((response) => response.json())
      .then((responseData) => {
        console.log(responseData.data);
        setUsersCalories(responseData.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const fetchUserData = () => {
    fetch(`${BASE_URL}/users/user`, {
      headers: {
        Authorization: `Bearer ${auth.accessToken}`,
      },
    })
      .then((response) => response.json())
      .then((responseData) => {
        console.log(responseData.data);
        setUserName(responseData.data.name);
        setuserTargetTDEE(responseData.data.targetTdee);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const fetchMeals = () => {
    fetch(`${BASE_URL}/meals`, {
      headers: {
        Authorization: `Bearer ${auth.accessToken}`,
      },
    })
      .then((response) => response.json())
      .then((responseData) => {
        console.log(responseData.data);
        setUsersMeals(responseData.data);
      })
      .catch((error) => console.log(error));
  };

  const fetchWorkout = () => {
    fetch(`${BASE_URL}/workouts`, {
      headers: {
        Authorization: `Bearer ${auth.accessToken}`,
      },
    })
      .then((response) => response.json())
      .then((responseData) => {
        console.log(responseData.data);
        setUsersWorkouts(responseData.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchDailyLogs();
    fetchUserData();
    fetchMeals();
    fetchWorkout();
  }, []);

  const fetchSearchMeal = () => {
    fetch(`${BASE_URL}/foods/search/?name=${searchMeal}`, {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${auth.accessToken}`,
      },
    })
      .then((response) => response.json())
      .then((responseData) => setFetchedFood(responseData.data))
      .catch((error) => {
        console.log(error);
        toast({
          title: error,
          status: "error",
          duration: 5000,
          position: "top-right",
          isClosable: true,
        });
      });
  };

  const addSelectedFoodToDB = () => {
    const newData = addNewFood.map((foods) => {
      return { food: foods.food, quantity: foods.quantity };
    });

    fetch(`${BASE_URL}/meals/addMeal`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${auth.accessToken}`,
      },
      body: JSON.stringify(newData),
    })
      .then((response) => response.json())
      .then((responseData) => {
        console.log(responseData);
        toast({
          title: responseData.message,
          status: "success",
          duration: 5000,
          position: "top-right",
          isClosable: true,
        });

        setAddNewFood([]);
        fetchDailyLogs();
        fetchMeals();
        fetchWorkout();
        mealModal.onClose();
      })
      .catch((error) => {
        console.log(error);
        toast({
          title: error,
          status: "error",
          duration: 5000,
          position: "top-right",
          isClosable: true,
        });
      });
  };

  const addSelectedExerciseToDB = () => {
    const newData = addNewExercise.map((exercise) => {
      return { exercise: exercise.exercise, duration: exercise.duration };
    });

    fetch(`${BASE_URL}/workouts/addWorkout`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${auth.accessToken}`,
      },
      body: JSON.stringify(newData),
    })
      .then((response) => response.json())
      .then((responseData) => {
        console.log(responseData);
        toast({
          title: responseData.message,
          status: "success",
          duration: 5000,
          position: "top-right",
          isClosable: true,
        });

        setAddNewExercise([]);
        fetchDailyLogs();
        fetchMeals();
        fetchWorkout();
        workoutModal.onClose();
      })
      .catch((error) => {
        console.log(error);
        toast({
          title: error,
          status: "error",
          duration: 5000,
          position: "top-right",
          isClosable: true,
        });
      });
  };

  const fetchSearchWorkout = () => {
    fetch(`${BASE_URL}/exercises/search/?name=${searchWorkout}`, {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${auth.accessToken}`,
      },
    })
      .then((response) => response.json())
      .then((responseData) => setFetchedExercises(responseData.data))
      .catch((error) => {
        console.log(error);
        toast({
          title: error,
          status: "error",
          duration: 5000,
          position: "top-right",
          isClosable: true,
        });
      });
  };

  return (
    <>
      <Box bgImage={bgBody} bgSize="cover" bgPosition="center center">
        <Box p={{ sm: 2, md: 3, lg: 5 }}>
          <Card
            p="0px"
            gridArea={{ md: "1 / 1 / 2 / 3", "2xl": "auto" }}
            bgImage={medusa}
            bgSize="cover"
            bgPosition="50%"
            borderRadius="20px"
          >
            <CardBody w="100%" h="100%">
              <Flex
                flexDirection={{ sm: "column", lg: "row" }}
                w="100%"
                h="100%"
              >
                <Flex
                  flexDirection="column"
                  h="100%"
                  p="22px"
                  minW="60%"
                  lineHeight="1.6"
                >
                  <Text fontSize="sm" color="gray.400" fontWeight="bold">
                    Welcome back,
                  </Text>
                  <Text
                    fontSize="28px"
                    color="#fff"
                    fontWeight="bold"
                    mb="18px"
                  >
                    {userName && userName.toUpperCase()}
                  </Text>
                  <Text
                    fontSize="md"
                    color="gray.400"
                    fontWeight="normal"
                    mb="auto"
                  >
                    Glad to see you again! <br />
                    <br />
                    <Text color="white">Today&apos;s Goal.</Text>
                  </Text>
                  <Text
                    fontSize="3xl"
                    color="white"
                    fontWeight="bolder"
                    mb="auto"
                  >
                    {userTargetTDEE + " "}
                    <span style={{ fontSize: "15px", fontWeight: "500" }}>
                      Cal
                    </span>
                  </Text>
                  <Spacer />
                  <Flex align="center">
                    <Box
                      p="0px"
                      variant="no-hover"
                      bg="transparent"
                      my={{ sm: "1.5rem", lg: "0px" }}
                      display={"flex"}
                    >
                      <Text
                        fontSize="sm"
                        color="#fff"
                        fontWeight="bold"
                        transition="all .3s ease"
                        my={{ sm: "1.5rem", lg: "0px" }}
                        _hover={{ me: "4px" }}
                      >
                        {new Date().getDate() +
                          " " +
                          [
                            "January",
                            "February",
                            "March",
                            "April",
                            "May",
                            "June",
                            "July",
                            "August",
                            "September",
                            "October",
                            "November",
                            "December",
                          ][new Date().getMonth()]}
                      </Text>
                      <Icon
                        as={BsArrowRight}
                        w="20px"
                        h="20px"
                        color="#fff"
                        fontSize="2xl"
                        transition="all .3s ease"
                        mx=".3rem"
                        pt="4px"
                        _hover={{ transform: "translateX(20%)" }}
                      />
                    </Box>
                  </Flex>
                </Flex>
              </Flex>
            </CardBody>
          </Card>
          <SimpleGrid columns={{ sm: 1, md: 2, xl: 4 }} spacing="24px" mt={4}>
            {/* MiniStatistics Card */}
            <Card
              p="22px"
              display="flex"
              flexDirection="column"
              backdropFilter="blur(120px)"
              width="100%"
              borderRadius="20px"
              bg="linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%)"
              backgroundClip="border-box"
            >
              <Text fontSize="lg" color="gray.100" fontWeight="bold" pb="2px">
                Food
              </Text>
              <CardBody display="flex" width="100%">
                <Flex
                  flexDirection="row"
                  align="center"
                  justify="center"
                  w="100%"
                >
                  <Stat me="auto">
                    <StatLabel
                      fontSize="sm"
                      color="gray.400"
                      fontWeight="bold"
                      pb="2px"
                    >
                      Today&apos;s intake calories
                    </StatLabel>
                    <Flex>
                      <StatNumber fontSize="lg" color="#fff">
                        {userCalories != null
                          ? userCalories.totalCalories + " "
                          : 0 + " "}
                        cal
                      </StatNumber>
                      <StatHelpText
                        alignSelf="flex-end"
                        justifySelf="flex-end"
                        m="0px"
                        color="green.400"
                        fontWeight="bold"
                        ps="3px"
                        fontSize="md"
                      >
                        +
                      </StatHelpText>
                    </Flex>
                  </Stat>

                  <img src={food} alt="" width="60px" />

                  {/* <IconBox as="box" h={"45px"} w={"45px"} bg="brand.200">
                <WalletIcon h={"24px"} w={"24px"} color="#fff" />
              </IconBox> */}
                </Flex>
              </CardBody>
            </Card>
            {/* MiniStatistics Card */}
            <Card
              p="22px"
              display="flex"
              flexDirection="column"
              backdropFilter="blur(120px)"
              width="100%"
              borderRadius="20px"
              bg="linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%)"
              backgroundClip="border-box"
              minH="83px"
            >
              <Text fontSize="lg" color="gray.100" fontWeight="bold" pb="2px">
                Workout
              </Text>
              <CardBody display="flex" width="100%">
                <Flex
                  flexDirection="row"
                  align="center"
                  justify="center"
                  w="100%"
                >
                  <Stat me="auto">
                    <StatLabel
                      fontSize="sm"
                      color="gray.400"
                      fontWeight="bold"
                      pb="2px"
                    >
                      Today&apos;s burned calories
                    </StatLabel>
                    <Flex>
                      <StatNumber fontSize="lg" color="#fff">
                        {userCalories != null
                          ? userCalories.totalCaloriesBurned + " "
                          : 0 + " "}
                        cal
                      </StatNumber>
                      <StatHelpText
                        alignSelf="flex-end"
                        justifySelf="flex-end"
                        m="0px"
                        color="red.500"
                        fontWeight="bold"
                        ps="3px"
                        fontSize="md"
                      >
                        -
                      </StatHelpText>
                    </Flex>
                  </Stat>
                  <img src={workout} alt="" width="70px" />
                </Flex>
              </CardBody>
            </Card>
            {/* MiniStatistics Card */}
            <Card
              p="22px"
              display="flex"
              flexDirection="column"
              backdropFilter="blur(120px)"
              width="100%"
              borderRadius="20px"
              bg="linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%)"
              backgroundClip="border-box"
            >
              <Text fontSize="lg" color="gray.100" fontWeight="bold" pb="2px">
                Net Calorie
              </Text>
              <CardBody display="flex" width="100%">
                <Flex
                  flexDirection="row"
                  align="center"
                  justify="center"
                  w="100%"
                >
                  <Stat>
                    <StatLabel
                      fontSize="sm"
                      color="gray.400"
                      fontWeight="bold"
                      pb="2px"
                    >
                      Today&apos;s net calories
                    </StatLabel>

                    <Flex>
                      <StatNumber fontSize="lg" color="#fff">
                        {userCalories != null
                          ? userCalories.totalCalories -
                            userCalories.totalCaloriesBurned +
                            " "
                          : 0 + " "}
                        cal
                      </StatNumber>
                      <StatHelpText
                        alignSelf="flex-end"
                        justifySelf="flex-end"
                        m="0px"
                        color="red.500"
                        fontWeight="bold"
                        ps="3px"
                        fontSize="md"
                      >
                        {" "}
                      </StatHelpText>
                    </Flex>
                  </Stat>
                  <img src={net} alt="" width="55px" />
                </Flex>
              </CardBody>
            </Card>
            {/* MiniStatistics Card */}
            <Card
              p="22px"
              display="flex"
              flexDirection="column"
              backdropFilter="blur(120px)"
              width="100%"
              borderRadius="20px"
              bg="linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%)"
              backgroundClip="border-box"
            >
              <Text fontSize="lg" color="gray.100" fontWeight="bold" pb="2px">
                Balance Calorie
              </Text>

              <CardBody display="flex" width="100%">
                <Flex
                  flexDirection="row"
                  align="center"
                  justify="center"
                  w="100%"
                >
                  <Stat me="auto">
                    <StatLabel
                      fontSize="sm"
                      color="gray.400"
                      fontWeight="bold"
                      pb="2px"
                    >
                      Today&apos;s balance calories
                    </StatLabel>
                    <Flex>
                      <StatNumber fontSize="lg" color="#fff" fontWeight="bold">
                        {userTargetTDEE -
                          (userCalories != null
                            ? userCalories.totalCalories -
                              userCalories.totalCaloriesBurned
                            : 0)}{" "}
                        cal
                      </StatNumber>
                      <StatHelpText
                        alignSelf="flex-end"
                        justifySelf="flex-end"
                        m="0px"
                        color="green.400"
                        fontWeight="bold"
                        ps="3px"
                        fontSize="md"
                      >
                        {" "}
                      </StatHelpText>
                    </Flex>
                  </Stat>
                  <img src={balance} alt="" width="80px" />
                </Flex>
              </CardBody>
            </Card>
          </SimpleGrid>

          <Card
            p="22px"
            display="flex"
            flexDirection="column"
            backdropFilter="blur(120px)"
            width="100%"
            borderRadius="20px"
            bg="linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%)"
            backgroundClip="border-box"
            my="22px"
            overflowX={{ sm: "scroll", xl: "hidden" }}
            pb="0px"
          >
            <CardHeader display="flex" width="100%" p="6px 0px 22px 0px">
              <Flex direction="column">
                <Text fontSize="lg" color="#fff" fontWeight="bold" mb=".5rem">
                  Food Table
                </Text>
                <Button
                  colorScheme="teal"
                  variant="ghost"
                  _hover={{ bg: "#00000000" }}
                  onClick={mealModal.onOpen}
                >
                  <Flex align="center">
                    <Icon
                      as={IoIosAddCircle}
                      color="green.500"
                      w="15px"
                      h="15px"
                      me="5px"
                    />
                    <Text fontSize="sm" color="gray.400" fontWeight="normal">
                      Add Food
                    </Text>
                  </Flex>
                </Button>
              </Flex>
            </CardHeader>
            <CardBody display="flex" width="100%">
              <Table variant="simple" color="#fff">
                <Thead>
                  <Tr my=".8rem" ps="0px">
                    <Th ps="0px" color="gray.400" borderBottomColor="#56577A">
                      Food
                    </Th>
                    <Th color="gray.400" borderBottomColor="#56577A">
                      Serving Size
                    </Th>
                    <Th color="gray.400" borderBottomColor="#56577A">
                      Quantity
                    </Th>
                    <Th color="gray.400" borderBottomColor="#56577A">
                      Remove
                    </Th>
                    <Th borderBottomColor="#56577A"></Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {usersMeals &&
                    usersMeals.map((item, index) => {
                      return (
                        <TablesFoodRow
                          key={index}
                          {...item}
                          lastItem={
                            index === usersMeals.length - 1 ? true : false
                          }
                        />
                      );
                    })}
                </Tbody>
              </Table>
            </CardBody>
          </Card>

          <Card
            p="22px"
            display="flex"
            flexDirection="column"
            backdropFilter="blur(120px)"
            width="100%"
            borderRadius="20px"
            bg="linear-gradient(127.09deg, rgba(6, 11, 40, 0.94) 19.41%, rgba(10, 14, 35, 0.49) 76.65%)"
            backgroundClip="border-box"
            my="22px"
            overflowX={{ sm: "scroll", xl: "hidden" }}
            pb="0px"
          >
            <CardHeader display="flex" width="100%" p="6px 0px 22px 0px">
              <Flex direction="column">
                <Text fontSize="lg" color="#fff" fontWeight="bold" mb=".5rem">
                  Workout Table
                </Text>
                <Button
                  colorScheme="teal"
                  variant="ghost"
                  _hover={{ bg: "#00000000" }}
                  onClick={workoutModal.onOpen}
                >
                  <Flex align="center">
                    <Icon
                      as={IoIosAddCircle}
                      color="green.500"
                      w="15px"
                      h="15px"
                      me="5px"
                    />
                    <Text fontSize="sm" color="gray.400" fontWeight="normal">
                      Add Workout
                    </Text>
                  </Flex>
                </Button>
              </Flex>
            </CardHeader>
            <CardBody display="flex" width="100%">
              <Table variant="simple" color="#fff">
                <Thead>
                  <Tr my=".8rem" ps="0px">
                    <Th ps="0px" color="gray.400" borderBottomColor="#56577A">
                      Workout
                    </Th>
                    <Th color="gray.400" borderBottomColor="#56577A">
                      Cal Burned/min
                    </Th>
                    <Th color="gray.400" borderBottomColor="#56577A">
                      Duration
                    </Th>
                    <Th color="gray.400" borderBottomColor="#56577A">
                      Remove
                    </Th>
                    <Th borderBottomColor="#56577A"></Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {usersWorkout &&
                    usersWorkout.map((item, index) => {
                      return (
                        <TablesWorkoutRow
                          key={index}
                          {...item}
                          lastItem={
                            index === usersWorkout.length - 1 ? true : false
                          }
                        />
                      );
                    })}
                </Tbody>
              </Table>
            </CardBody>
          </Card>
        </Box>

        {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={mealModal.isOpen}
          size={"full"}
          onClose={mealModal.onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add Meal</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6} width={{ sm: "100%", md: "50%" }} mx={"auto"}>
              <FormControl>
                <FormLabel>Meal</FormLabel>
                <Box display={"flex"} gap={2}>
                  <Input
                    ref={initialRef}
                    placeholder="Search Meal"
                    value={searchMeal}
                    onChange={(e) => {
                      setSearchMeal(e.target.value);
                    }}
                  />
                  <IconButton
                    colorScheme="blue"
                    aria-label="Search database"
                    icon={<SearchIcon />}
                    onClick={fetchSearchMeal}
                  />
                </Box>
              </FormControl>
              <div>
                {addNewFood.length > 0 && (
                  <p style={{ fontWeight: "500", marginTop: "10px" }}>
                    Added Meal
                  </p>
                )}
                {addNewFood.length > 0 &&
                  addNewFood.map((item) => {
                    return (
                      <p
                        key={item.food}
                        style={{ fontSize: " 14px", padding: "3px 0px" }}
                      >
                        <button
                          onClick={() => {
                            const foodId = item.food;

                            const newFood = addNewFood.filter((fooditem) => {
                              return fooditem.food != foodId;
                            });

                            setAddNewFood([...newFood]);
                          }}
                        >
                          <i className="zmdi zmdi-close-circle"> </i>{" "}
                          &nbsp;&nbsp;&nbsp;
                        </button>
                        {item.name} : Qty {item.quantity}
                      </p>
                    );
                  })}
              </div>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "20px",
                  marginTop: "20px",
                }}
              >
                {fetchedFood &&
                  fetchedFood.map((food) => {
                    return (
                      <div
                        key={food._id}
                        style={{
                          width: "100%",
                          maxWidth: "330px",
                          boxShadow:
                            "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                          borderRadius: "10px",
                          padding: "10px",
                          boxSizing: "border-box",
                        }}
                      >
                        <p
                          style={{
                            fontSize: "20px",
                            fontWeight: "bold",
                            margin: "5px 0px",
                          }}
                        >
                          {food.name}
                        </p>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <p>Serving size : {food.servingSize}</p>
                          <p style={{}}>Calories : {food.calories} cal</p>
                        </div>

                        <div
                          style={{
                            display: "flex ",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <div>
                            <p style={{ fontSize: "14px" }}>
                              Proteins : {food.macros.protein}
                            </p>
                            <p style={{ fontSize: "14px" }}>
                              Carbs : {food.macros.carbs}
                            </p>
                            <p style={{ fontSize: "14px" }}>
                              Fat : {food.macros.fat}
                            </p>
                          </div>
                          <div style={{ display: "flex", gap: "10px" }}>
                            <span>Qty.</span>
                            <input
                              type="number"
                              name=""
                              id=""
                              defaultValue={0}
                              style={{
                                width: "70px",
                                border: "1px solid #818181",
                                borderRadius: "5px",
                                min: 1,
                              }}
                              onChange={(e) => {
                                if (e.target.value >= 0) {
                                  const foodId = food._id;
                                  const newFood = addNewFood.filter((item) => {
                                    return item.food != foodId;
                                  });

                                  if (e.target.value > 0) {
                                    setAddNewFood([
                                      ...newFood,
                                      {
                                        food: foodId,
                                        name: food.name,
                                        quantity: e.target.value,
                                      },
                                    ]);
                                  } else {
                                    setAddNewFood([...newFood]);
                                  }
                                }
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={addSelectedFoodToDB}>
                Save
              </Button>
              <Button onClick={mealModal.onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={workoutModal.isOpen}
          size={"full"}
          onClose={workoutModal.onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add Workout</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6} width={{ sm: "100%", md: "50%" }} mx={"auto"}>
              <FormControl>
                <FormLabel>Workout</FormLabel>
                <Box display={"flex"} gap={2}>
                  <Input
                    ref={initialRef}
                    placeholder="Search Workout"
                    value={searchWorkout}
                    onChange={(e) => {
                      setSearchWorkout(e.target.value);
                    }}
                  />
                  <IconButton
                    colorScheme="blue"
                    aria-label="Search database"
                    icon={<SearchIcon />}
                    onClick={fetchSearchWorkout}
                  />
                </Box>
              </FormControl>

              <div>
                {addNewExercise.length > 0 && (
                  <p style={{ fontWeight: "500", marginTop: "10px" }}>
                    Added Exercise
                  </p>
                )}

                {addNewExercise.length > 0 &&
                  addNewExercise.map((item) => {
                    return (
                      <p
                        key={item.exercise}
                        style={{ fontSize: " 14px", padding: "3px 0px" }}
                      >
                        <button
                          onClick={() => {
                            const exerciseId = item.exercise;

                            const newExercise = addNewExercise.filter(
                              (exerciseItem) => {
                                return exerciseItem.exercise != exerciseId;
                              }
                            );

                            setAddNewExercise([...newExercise]);
                          }}
                        >
                          <i className="zmdi zmdi-close-circle"> </i>{" "}
                          &nbsp;&nbsp;&nbsp;
                        </button>
                        {item.name} : Duration {item.duration}
                      </p>
                    );
                  })}
              </div>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "20px",
                  marginTop: "20px",
                }}
              >
                {fetchedExercises &&
                  fetchedExercises.map((exercise) => {
                    return (
                      <div
                        key={exercise._id}
                        style={{
                          width: "100%",
                          maxWidth: "330px",
                          boxShadow:
                            "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                          borderRadius: "10px",
                          padding: "10px",
                          boxSizing: "border-box",
                        }}
                      >
                        <p
                          style={{
                            fontSize: "20px",
                            fontWeight: "bold",
                            margin: "5px 0px",
                          }}
                        >
                          {exercise.name}
                        </p>

                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <p>Type : {exercise.type}</p>
                          <p style={{}}>
                            Calories Burned: {exercise.caloriesBurnedPerMinute}{" "}
                            cal
                          </p>
                        </div>

                        <div
                          style={{
                            display: "flex ",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          {/* <div>
                            <p style={{}}>
                              Calories Burned:{" "}
                              {exercise.caloriesBurnedPerMinute} cal
                            </p>
                          </div> */}
                          <div style={{ display: "flex", gap: "10px" }}>
                            <span>Duration (in min)</span>
                            <input
                              type="number"
                              name=""
                              id=""
                              defaultValue={0}
                              style={{
                                width: "70px",
                                border: "1px solid #818181",
                                borderRadius: "5px",
                                min: 1,
                              }}
                              onChange={(e) => {
                                if (e.target.value >= 0) {
                                  const exerciseId = exercise._id;

                                  const newExercise = addNewExercise.filter(
                                    (item) => {
                                      return item.exercise != exerciseId;
                                    }
                                  );

                                  if (e.target.value > 0) {
                                    setAddNewExercise([
                                      ...newExercise,
                                      {
                                        exercise: exerciseId,
                                        name: exercise.name,
                                        duration: e.target.value,
                                      },
                                    ]);
                                  } else {
                                    setAddNewExercise([...newExercise]);
                                  }
                                }
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </ModalBody>

            <ModalFooter>
              <Button
                colorScheme="blue"
                mr={3}
                onClick={addSelectedExerciseToDB}
              >
                Save
              </Button>
              <Button onClick={workoutModal.onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </>
  );
};

export { UserDashboard };
