import { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Image, Flex, Button, Text } from "@chakra-ui/react";
import "../styles/Navbar/style.css";
import { AuthContext } from "../contexts/AuthContext";

const NavBar = () => {
  const [isActive, setIsActive] = useState(false);
  const { auth, setAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setAuth({
      isAuth: false,
      userId: "",
      email: "",
      accessToken: "",
    });

    navigate("/login");
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
