import React, { createContext, useEffect, useState } from 'react';
import { useNavigate } from "react-router";
import jwt_decode from 'jwt-decode';
import axios from 'axios';
import isTokenValid from "../helpers/isTokenValid";
import Loading from "../components/loading/Loading";

export const AuthContext = createContext({});

function AuthContextProvider({ children }) {

    const [isAuth, toggleIsAuth] = useState({
        isAuth: false,
        user: null,
        status: 'pending',
    });

    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');

        if(token && isTokenValid(token)){
            const decoded = jwt_decode(token);
            fetchUserData(decoded.sub, token)
        } else {
            toggleIsAuth({
                isAuth: false,
                user: null,
                status: 'done',
            })
        }
    }, []);

    function userLogin(JWT) {
        localStorage.setItem('token', JWT);
        console.log(JWT);
        const decoded = jwt_decode(JWT);
        fetchUserData(decoded.sub, JWT, './profile');
        console.log("I work");
        console.log(isAuth);
    }

    function logout() {
        localStorage.clear();
        toggleIsAuth({
            isAuth: false,
            user: null,
            status: 'done',
        });

        console.log("User is logged out");
        navigate('/');
    }

    async function fetchUserData(id, token, redirect) {
        try{
            const result = await axios.get('https://frontend-educational-backend.herokuapp.com/api/user', {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            })

            toggleIsAuth({
                ...isAuth,
                isAuth: true,
                user: {
                    username: result.data.username,
                    email: result.data.email,
                    id: result.data.id,
                },
                status: 'done',
            });

            if(redirect) {
                navigate(redirect);
            }

        } catch(e) {
            console.error(e);
            toggleIsAuth({
                isAuth: false,
                user: null,
                status: 'done',
            });
            console.error(e);
            localStorage.clear();
        }
    }

    const data = {
        ...isAuth,
        userLogin,
        logout
    };

    return (
        <AuthContext.Provider value={data}>
            {isAuth.status === 'done' ? children : <Loading/>}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;

