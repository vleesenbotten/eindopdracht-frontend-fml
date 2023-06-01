import React from 'react';
import {NavLink} from "react-router-dom";
import styles from "./Navigation.module.css";

function Navigation() {
    return (
        <nav className={ styles["nav"]}>
            <img src="https://via.placeholder.com/100x100" alt="logo"/>
            <ul className={ styles["nav_ul"]}>
                <li>
                    <NavLink to="/"
                             className={({ isActive }) => isActive ? styles["nav_li--active"] : styles["nav_li"] }>
                        home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/profile"
                             className={({ isActive }) => isActive ? styles["nav_li--active"] : styles["nav_li"] }>
                        profile
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/login"
                             className={({ isActive }) => isActive ? styles["nav_li--active"] : styles["nav_li"] }>
                        login
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/register"
                             className={({ isActive }) => isActive ? styles["nav_li--active"] : styles["nav_li"] }>
                        register
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;