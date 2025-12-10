import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
  )
}

export default App;
