import React, { createContext, useEffect, useState } from 'react';

export const FavoriteContext = createContext();

const FavoriteProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const storedFavorites = localStorage.getItem('favorites');
        if (storedFavorites) {
            setFavorites(JSON.parse(storedFavorites));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites]);

    function addToFavorites(game){
        setFavorites((prevFavorites) => [...prevFavorites, game]);
    }

    function removeFromFavorites(gameId){
        setFavorites((prevFavorites) =>
            prevFavorites.filter((game) => game.id !== gameId)
        );
    }

    function isFavorite(gameId){
        return favorites.some((game) => game.id === gameId);
    }

    function toggleFavorite(game){
        if(isFavorite(game.id)){
            removeFromFavorites(game.id);
        } else {
            addToFavorites(game);
        }
    }

    const favoritesData = {
        favorites: favorites,
        addToFavorites: addToFavorites,
        removeFromFavorites: removeFromFavorites,
        isFavorite: isFavorite,
        toggleFavorite: toggleFavorite,
    };

    return (
        <FavoriteContext.Provider value={favoritesData}>
            {children}
        </FavoriteContext.Provider>
    );
};

export default FavoriteProvider;
