import React, { useContext } from 'react';
import { FavoriteContext } from '../../context/FavoriteContext';
import styles from './FavoriteButton.module.css';

function FavoriteButton({ game, className }) {
    const { toggleFavorite, isFavorite } = useContext(FavoriteContext);

    const buttonClassName = `${styles.button} ${className || ''}`;

    return (
        <button onClick={() => toggleFavorite(game)} className={buttonClassName}>
            {isFavorite(game.id) ? (
                <img src="/icons/hearticons/heartbreak_path.svg" alt="broken heart icon" />
            ) : (
                <img src="/icons/hearticons/heart-sparkles_path.svg" alt="heart icon" />
            )}
        </button>
    );
}

export default FavoriteButton;
