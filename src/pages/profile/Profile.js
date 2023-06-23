import React, {useContext, useEffect, useState} from 'react';
import {FavoriteContext} from "../../context/FavoriteContext";
import axios from "axios";
import Error from "../../components/error/Error";
import {AuthContext} from "../../context/AuthContext";
import Loading from "../../components/loading/Loading";

function Profile() {
    const { favorites, isFavorite, toggleFavorite } = useContext(FavoriteContext);
    const [userData, setUserData] = useState('');
    const { user } = useContext(AuthContext);
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);

    useEffect(() => {
        async function fetchProfileData(){
            toggleLoading(true);
            toggleError(false)
            const token = localStorage.getItem('token');

            try{
                const result = await axios.get('https://frontend-educational-backend.herokuapp.com/api/user', {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                });
                console.log(result.data);
                setUserData(result.data);

            } catch (e){
                console.error(e);
                toggleError(true);
            }
            toggleLoading(false);
        }

        void fetchProfileData();
    }, []);

    return (
        <>
            <img src="https://via.placeholder.com/150x150" alt="logo"/>
            {/*maybe make components of the loading/error?*/}
            {error && <Error/>}
            {loading && <Loading/>}

            <h1>your private deetz</h1>
            <p>your username is</p>
            <p>{user.username}</p>
            <p>your email is</p>
            <p>{user.email}</p>
                <p>if you wish to change anything about you - dont. you are beautiful as you are</p>
                <p>also i didn't want to implement that function</p>
                <div>
                    <h1>Favorites</h1>
                    {favorites.length > 0 ? (
                        <ul>
                            {favorites.map((game) => (
                                <>
                                    <li key={game.id}>{game.name}</li>
                                    <button onClick={() => toggleFavorite(game)}>
                                        {isFavorite(game.id) ? '</3' : '<3'}
                                    </button>
                                </>
                            ))}
                        </ul>
                    ) : (
                        <p>No favorites found.</p>
                    )}
                </div>
        </>
    );
}

export default Profile;