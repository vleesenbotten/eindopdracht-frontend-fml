import React, {useContext} from 'react';
import {NavLink} from "react-router-dom";
import styles from "./Navigation.module.css";
import {AuthContext} from "../../context/AuthContext";
import Button from "../button/Button";

function Navigation() {
    const {isAuth, logout} = useContext(AuthContext);

    return (
       <div className={styles["inner-content-container"]}>
        <nav className={styles["nav"]}>
            <img src="https://via.placeholder.com/100x100" alt="logo"/>
            <ul className={styles["nav_ul"]}>
                {isAuth ?
                    <div className={styles["nav_authorized"]}>
                        <li>
                            <NavLink to="/"
                                     className={({isActive}) => isActive ? styles["nav_li--active"] : styles["nav_li"]}>
                                home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/profile"
                                     className={({isActive}) => isActive ? styles["nav_li--active"] : styles["nav_li"]}>
                                profile
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/search"
                                     className={({isActive}) => isActive ? styles["nav_li--active"] : styles["nav_li"]}>
                                search
                            </NavLink>
                        </li>
                        <Button type="button" clickHandler={logout} name="logout 🧨"/>
                    </div>
                    :
                    <div className={styles["nav_not-authorized"]}>
                        <li>
                            <NavLink to="/login"
                                     className={({isActive}) => isActive ? styles["nav_li--active"] : styles["nav_li"]}>
                                login
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/register"
                                     className={({isActive}) => isActive ? styles["nav_li--active"] : styles["nav_li"]}>
                                register
                            </NavLink>
                        </li>
                    </div>
                }
            </ul>
        </nav>
       </div>
    );
}

export default Navigation;