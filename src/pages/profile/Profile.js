import React, {useContext, useEffect, useState} from 'react';
import {FavoriteContext} from "../../context/FavoriteContext";
import axios from "axios";
import Error from "../../components/error/error";

function Profile() {
    const { favorites, isFavorite, toggleFavorite } = useContext(FavoriteContext);
    const [userData, setUserData] = useState("");
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);

    useEffect(() => {
        async function fetchProfileData(){
            toggleError(false);
            toggleLoading(true);
            try{
                const result = await axios.get('https://frontend-educational-backend.herokuapp.com/api/user');
                setUserData(result.data);
                console.log(result.data)
            } catch(e){
                console.error(e);
                toggleError(true);
            }
            toggleLoading(false);
        };

        fetchProfileData();
    }, [])

    return (
        <>
            <img src="https://via.placeholder.com/150x150" alt="logo"/>
            {/*maybe make components of the loading/error?*/}
            {loading && <p>Loading...</p>}

            <h1>A very lovely username</h1>
            <p>{userData.username}</p>
            <p>there will be an username here</p>
            <p>{userData.email}</p>
            <p>there will be an email here</p>
            <p>{userData.info}</p>
            <p>maybe you filled out some info</p>
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