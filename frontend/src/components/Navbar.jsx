import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Image, Flex, Button, Text } from "@chakra-ui/react";
import '../styles/Navbar/style.css'

const NavBar = () => {
  const [isActive, setIsActive] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const listOfLinks = [
    {
      to: "/",
      displayText: "Home",
    },
    {
      to: "/about",
      displayText: "About",
    },
  ];

  const defaultStyle = { color: 'white' ,fontWeight: "bold", marginRight: "20px" };
  const activeStyle = { color: "#fff900",fontWeight: "bold", marginRight: "20px" };
  const transparentBackground = { backgroundColor: "black", minHeight: "8vh" }; 

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
        justify="space-between"
        style={transparentBackground}
      >
        <NavLink to={"/"}>
          <Flex align="center">
            <Image src="logo.png" alt="Logo" boxSize={"50px"} pl={3} />
            <Text marginLeft="10px" color={"white"} fontSize={'25px'}>
              FITMATE
            </Text>
          </Flex>
        </NavLink>
        <Flex
          align="center"
        >
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
        <div>
          {isLoggedIn ? (
            <Button onClick={() => setIsLoggedIn(false)} className="btn">Logout</Button>
          ) : (
            <>
              <Button
                backgroundColor={"#fff900"}
                border={"1px solid white"}
                mr={4}
                zIndex={3}
                className="btn"
              >
                <NavLink to={"/login"}>Login</NavLink>
              </Button>
              <Button backgroundColor={"#fff900"} mr={4} zIndex={3} className="btn">
                <NavLink to={"/signup"}>Signup</NavLink>
              </Button>
            </>
          )}
        </div>
      </Flex>
    </div>
  );
};

export default NavBar;
