import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Image, Flex, Button, Text, useToast } from "@chakra-ui/react";
import "../styles/Navbar/style.css";
import { AuthContext } from "../contexts/AuthContext";
import { BASE_URL } from "../utils/vars";

const NavBar = () => {
  const [isActive, setIsActive] = useState(false);
  const { auth, setAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  const toast = useToast();

  const handleLogout = () => {
    fetch(`${BASE_URL}/users/logout`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${auth.accessToken}`,
      },
    })
      .then((response) => response.json())
      .then((responseData) => {
        console.log(responseData);

        if (!responseData.error) {
          toast({
            title: responseData.message,
            status: "success",
            duration: 5000,
            position: "top-right",
            isClosable: true,
          });

          setAuth({
            isAuth: false,
            userId: "",
            email: "",
            accessToken: "",
          });

          localStorage.removeItem("accessToken");
          localStorage.removeItem("userId");
          localStorage.removeItem("email");

          navigate("/");
        } else {
          throw new Error(responseData.message);
        }
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

  const listOfLinks = [
    {
      to: "/",
      displayText: "Home",
    },
    {
      to: "/about",
      displayText: "About",
    },
    auth.isAuth
      ? {
          to: "/dashboard",
          displayText: "Dashboard",
        }
      : null,
  ].filter((link) => link !== null);

  const defaultStyle = {
    color: "white",
    fontWeight: "bold",
    marginRight: "20px",
  };
  const activeStyle = {
    color: "#fff900",
    fontWeight: "bold",
    marginRight: "20px",
  };
  const transparentBackground = {
    backgroundColor: "black",
    minHeight: "8vh",
    width: "100%",
  };

  const toggleMenu = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <div className="navbar" style={transparentBackground}>
      <div
        className={`hamburger-menu ${isActive ? "active" : null}`}
        onClick={toggleMenu}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <Flex
        className={`navbar-inner ${isActive ? "active" : null}`}
        align="center"
        justifyContent={"space-between"}
        style={transparentBackground}
      >
        <NavLink to={"/"}>
          <Flex align="center">
            <Image
              src="logo.png"
              alt="Logo"
              boxSize={"50px"}
              pl={3}
              objectFit={"contain"}
              onClick={() => {
                navigate("/login");
              }}
            />
            <Text
              marginLeft="10px"
              color={"white"}
              fontSize={"25px"}
              fontWeight={"bold"}
            >
              FITMATE
            </Text>
          </Flex>
        </NavLink>
        <Flex align="center" className="links">
          {listOfLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setIsActive(false)}
              style={({ isActive }) => (isActive ? activeStyle : defaultStyle)}
            >
              {link.displayText}
            </NavLink>
          ))}
        </Flex>
        <div className="btn">
          {auth.isAuth ? (
            <Button
              className="text-btn"
              onClick={() => {
                handleLogout();
              }}
              backgroundColor={"#fff900"}
              mr={4}
              zIndex={3}
            >
              Logout
            </Button>
          ) : (
            <>
              <Button
                className="text-btn"
                backgroundColor={"#fff900"}
                border={"1px solid white"}
                mr={4}
                zIndex={3}
                onClick={() => {
                  navigate("/login");
                }}
              >
                {/* <NavLink to={"/login"}>Login</NavLink> */}
                Login
              </Button>
              <Button
                className="text-btn"
                backgroundColor={"#fff900"}
                mr={4}
                zIndex={3}
                onClick={() => {
                  navigate("/signup");
                }}
              >
                Signup
              </Button>
            </>
          )}
        </div>
      </Flex>
    </div>
  );
};

export default NavBar;
