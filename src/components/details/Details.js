import React from 'react';
import {Link} from 'react-router-dom';

function Details({ game }) {

    return (
        <article>
            <img src={game.background_image} alt={game.name} width="600" height="300"/>
            <h1>{game.name}</h1>
            <span>
                <p>Genres:</p>
                {game.genres && game.genres.map((genre) => (
                    <p key={genre.id}>{genre.name}</p>
                ))}
            </span>
            <p>{game.description_raw}</p>
            {game.developers && game.developers.map((developer) => (
                <p key={developer.id}>{developer.name}</p>
            ))}
            {game.stores && game.stores.map((store) => (
                <ul key={store.id}>
                    <li>
                        <Link to={`https://${store.store.domain}`}
                              target="_blank">{store.store.name}</Link>
                    </li>
                </ul>
            ))}
            {game.tags && game.tags.slice(0, 5).map((tag) => (
                <ol>
                    <li key={tag.id}>{tag.name}</li>
                </ol>
            ))}
            <Link to={`https://${game.website}`}>
                website
            </Link>
        </article>
    );
}

export default Details;