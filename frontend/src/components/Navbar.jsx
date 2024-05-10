import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Image, Flex, Button, Text } from "@chakra-ui/react";

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

  const activeStyle = { color: "#fff900", fontWeight: "bold" };
  const transparentBackground = { backgroundColor: "black", minHeight: "8vh" }; // Adjusted minHeight

  const toggleMenu = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <div className="navbar" style={transparentBackground}>
      <div
        className={`hamburger-menu ${isActive ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <Flex
        className={`navbar-inner ${isActive ? "active" : ""}`}
        align="center"
        justify="space-between"
        style={transparentBackground}
      >
        <NavLink to={"/"}>
          <Flex align="center">
            <Image src="logo.png" alt="Logo" boxSize={"50px"} />
            <Text marginLeft="10px" color={"white"} fontSize={'25px'}>
              FITMATE
            </Text>
          </Flex>
        </NavLink>
        <div>
          {listOfLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              style={{ color: "white", marginRight: "20px", ...(window.location.pathname === link.to && activeStyle) }}
              onClick={toggleMenu}
            >
              {link.displayText}
            </NavLink>
          ))}
        </div>
        <div>
          {isLoggedIn ? (
            <Button onClick={() => setIsLoggedIn(false)}>Logout</Button>
          ) : (
            <>
              <Button
                backgroundColor={"#fff900"}
                border={"1px solid white"}
                mr={4}
                zIndex={3}
              >
                Login
              </Button>
              <Button backgroundColor={"#fff900"} mr={4} zIndex={3}>
                Register
              </Button>
            </>
          )}
        </div>
      </Flex>
    </div>
  );
};

export default NavBar;
