import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { About } from "./About";

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
    </Routes>
  );
};

export default AllRoutes;
