import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import {FavoriteContext} from "../../context/FavoriteContext";
// import toggleFavorite from "../../helpers/toggleFavorite";

function Details({ game, gameSeries }) {

    const { toggleFavorite, isFavorite } = useContext(FavoriteContext);

    return (
        <article>
            <img src={game.background_image} alt={game.name} width="600" height="300"/>
            <h1>{game.name}</h1>
            <p>Metacritic: {game.metacritic}</p>
            <span>
                <p>Ratings:</p>
                {game.ratings && game.ratings.map((rating) => (
                    <p key={rating.id}>{rating.percent} {rating.title}</p>
                ))}
            </span>
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
            <Link to={`${game.website}`} target="_blank">
                website
            </Link>
            <button onClick={() => toggleFavorite(game)}>
                {isFavorite(game.id) ? '</3' : '<3'}
            </button>
            <div>
                <img src="https://via.placeholder.com/100x100" alt="logo" />
                <p>Games from the series here:</p>
                {gameSeries.length > 0 ? (
                    <ul>
                        {gameSeries.map((series) => (
                            <li key={series.id}>{series.name}</li>
                        ))}
                    </ul>
                ) : (
                    <p>Not part of any series</p>
                )}
            </div>
        </article>
    );
}

export default Details;