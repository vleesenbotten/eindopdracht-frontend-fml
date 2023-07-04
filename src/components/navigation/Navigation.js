import React, {useContext} from 'react';
import {NavLink} from "react-router-dom";
import styles from "./Navigation.module.css";
import {AuthContext} from "../../context/AuthContext";
import Button from "../button/Button";
import Logo from "../logo/Logo";

function Navigation() {
    const {isAuth, logout} = useContext(AuthContext);

    return (
        <nav className={styles["nav"]}>
            <span className={styles['nav_image-wrapper']}>
                <Logo/>
            </span>
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
                            <NavLink to="/about"
                                     className={({isActive}) => isActive ? styles["nav_li--active"] : styles["nav_li"]}>
                                about
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
                        <Button type="button" clickHandler={logout} name="logout"/>
                    </div>
                    :
                    <div className={styles["nav_not-authorized"]}>
                        <li>
                            <NavLink to="/"
                                     className={({isActive}) => isActive ? styles["nav_li--active"] : styles["nav_li"]}>
                                home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/about"
                                     className={({isActive}) => isActive ? styles["nav_li--active"] : styles["nav_li"]}>
                                about
                            </NavLink>
                        </li>
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
    );
}

export default Navigation;