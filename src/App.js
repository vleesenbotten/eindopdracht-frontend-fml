import './App.css';
import {Route, Routes} from "react-router";
import Navigation from "./components/navigation/Navigation";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Profile from "./pages/profile/Profile";

function App() {
  return (
      <>
        <Navigation/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/profile" element={<Profile/>}/>
        </Routes>
      </>
  );
}

export default App;
