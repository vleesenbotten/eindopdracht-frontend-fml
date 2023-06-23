import React from 'react';
import { Link } from 'react-router-dom';

function Card({ game }) {

    return (
        <Link to={`/game/${game.id}`}>
            <article>
                <img src={game.background_image} alt={game.name} width="400" height="200"/>
                <h3>{game.name}</h3>
                <h4>{game.rating}</h4>
                {game.genres.map((genre) => (
                    <p key={genre.id}>{genre.name}</p>
                ))}
            </article>
        </Link>
    );
}

export default Card;