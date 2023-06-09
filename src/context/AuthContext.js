import React, { createContext, useEffect, useState } from 'react';
import { useNavigate } from "react-router";
import jwt_decode from 'jwt-decode';
import axios from 'axios';
import isTokenValid from "../helpers/isTokenValid";

export const AuthContext = createContext({});

function AuthContextProvider({ children }) {
    // ik ontvang hier een 404 op?
    // const endpointAuth = "https://frontend-educational-backend.herokuapp.com/";

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
            void fetchUserData(decoded.sub, token)
        } else {
            toggleIsAuth({
                isAuth: false,
                user: null,
                status: 'done',
            })
        }
    }, []);

    function login(JWT) {
        localStorage.setItem('token', JWT);
        const decoded = jwt_decode(JWT);
        fetchUserData(decoded.sub, JWT);

        navigate('/profile');
        console.log("I work");
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

    async function fetchUserData(id, token) {
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

        } catch(e) {
            console.error(e);
            toggleIsAuth({
                isAuth: false,
                user: null,
                status: 'done',
            });
        }
    }

    const data = {
        isAuth: isAuth.isAuth,
        user: isAuth.user,
        authlogin: login,
        logout: logout,
    };

    return (
        <AuthContext.Provider value={data}>
            {isAuth.status === 'done' ? children : <p>Loading...</p>}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;
