import './App.css';
import {Route, Routes} from "react-router";
import Navigation from "./components/navigation/Navigation";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Profile from "./pages/profile/Profile";
import Search from "./pages/search/Search";
import GameDetails from "./pages/gamedetails/GameDetails";

function App() {
  return (
      <>
        <Navigation/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/search" element={<Search />} />
            <Route path="/game/:id" element={<GameDetails />} />
        </Routes>
      </>
  );
}

export default App;
