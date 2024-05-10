import "./App.css";
import { Home } from "./components/Home";
import Navbar from "./components/Navbar";
import { AllRoutes } from "./routes/AllRoutes";

function App() {
  return (
    <>
      <Navbar/>
      <AllRoutes />
    </>
  );
}

export default App;
