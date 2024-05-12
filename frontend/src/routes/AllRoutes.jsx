import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";
import { Signup } from "../pages/Signup";
import { Home } from "../components/Home";
import { About } from "../components/About";
import UserDashboard from "../pages/UserDashboard";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/about" element={<About/>} />
      <Route path="/dashboard" element={<UserDashboard />}/>
    </Routes>
  );
};

export { AllRoutes };
