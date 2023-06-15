import React from 'react';

function Card({ game }) {

    return (
        <article>
            <img src={game.background_image} width="400" height="200"/>
            <p>{game.name}</p>
            <p>{game.metacritic}</p>
            {game.genres.map((genre) => (
                <p key={genre.id}>{genre.name}</p>
            ))}
        </article>
    );
}

export default Card;