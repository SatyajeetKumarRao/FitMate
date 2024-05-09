import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
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

  const activeStyle = { color: "green", fontWeight: "bold" };
  const transparentBackground = { backgroundColor: "transparent" };

  return (
    <div className="navbar" style={transparentBackground}>
      <div className={`hamburger-menu ${isActive ? "active" : ""}`} onClick={() => setIsActive((prev) => !prev)}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <Flex className={`navbar-inner ${isActive ? "active" : ""}`} align="center" justify="space-between" style={transparentBackground}>
        <Link to={"/"}>
          <Flex align="center">
            <Image src="logo.png" alt="Logo" boxSize={"50px"} />
            <Text marginLeft="10px">FITMATE</Text>
          </Flex>
        </Link>
        <div>
          {listOfLinks.map((link) => (
            <NavLink key={link.to} to={link.to} activeStyle={activeStyle} onClick={() => setIsActive(false)} style={{ color: "white", marginRight: "20px" }}>
              {link.displayText}
            </NavLink>
          ))}
        </div>
        <div>
          {isLoggedIn ? (
            <Button>Logout</Button>
          ) : (
            <>
              <Button backgroundColor={"transparent"} border={"1px solid white"} mr={4}>
                Login
              </Button>
              <Button backgroundColor={"#fff900"} mr={4}>
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
