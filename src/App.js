import React, {useContext} from "react";
import {AuthContext} from "./context/AuthContext";
import {Navigate, Route, Routes} from "react-router";
import Navigation from "./components/navigation/Navigation";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Profile from "./pages/profile/Profile";
import Search from "./pages/search/Search";
import GameDetails from "./pages/gamedetails/GameDetails";
import Articles from "./pages/articles/Articles";
import ArticlePost from "./pages/articlepost/ArticlePost";
import styles from "./components/navigation/Navigation.module.css";

function App() {
    const { isAuth } = useContext(AuthContext);

  return (
      <>
        <header className={styles["outer-content-container"]}>
            <Navigation/>
        </header>
          <main className={styles["outer-content-container"]}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/search" element={<Search />} />
                <Route path="/articles" element={<Articles />} />
                <Route path="/articles/:id" element={<ArticlePost />} />
                <Route path="/game/:id" element={<GameDetails />} />
                {/*<Route path="/profile" element={isAuth ? <Profile/> : <Navigate to="/login"/>}/>*/}
                {/*<Route path="/search" element={isAuth ? <Search/> : <Navigate to="/login"/>} />*/}
                {/*<Route path="/articles" element={isAuth ? <Articles/> : <Navigate to="/login"/>} />*/}
                {/*<Route path="/articles/:id" element={isAuth ? <ArticlePost/> : <Navigate to="/login"/>} />*/}
                {/*<Route path="/game/:id" element={isAuth ? <GameDetails/> : <Navigate to="/login"/>} />*/}
            </Routes>
        </main>
      </>
  );
}

export default App;
