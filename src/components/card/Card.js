import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./Card.module.css"

function Card({ game }) {
    const slicedGenres = game.genres.slice(0, 4);
    const nameSlice = game.name.slice(0,40);

    return (
        <Link to={`/game/${game.id}`} className={styles["card_link"]}>
            <article className={styles["card_container"]}>
                <span className={styles["card_image-wrapper"]}>
                    <img src={game.background_image} alt={game.name} width="400" height="200" className={styles["card_image"]}/>
                </span>
                <h4 className={styles["card_game-heading"]}>{nameSlice}</h4>
                <div className={styles["card_section-one"]}>
                    <h5>rating: {game.rating}</h5>
                    <div className={styles["card_genres"]}>
                        <p>genres</p>
                        {slicedGenres.map((genre) => (
                            <ul key={genre.id}>
                                <span className={styles["card_genres-tag-container"]}>
                                    <li className={styles["card_genres-tag"]}>
                                        {genre.name === "Massively Multiplayer" ? "MMORPG" : genre.name}
                                    </li>
                                </span>
                            </ul>
                        ))}
                    </div>
                </div>
            </article>
        </Link>
    );
}

export default Card;
