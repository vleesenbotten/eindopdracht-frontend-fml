import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import styles from "./Details.module.css";
import FavoriteButton from "../favoritebuton/FavoriteButton";

function Details({game, gameSeries, errors}) {

    return (
        <article className={styles["details-post_article"]}>
            <FavoriteButton game={game} className={styles["FavoriteButton"]}/>
            <span className={styles["details-post_image-wrapper"]}>
                <img src={game.background_image} alt={game.name} className={styles["details-post_image"]}/>
            </span>
            <h2 className={styles["details-post_heading-two"]}>{game.name}</h2>
            <section className={styles["details_section-one"]}>
                {game.metacritic && game.metacritic !== 0 ? (
                    <h3>Metacritic: {game.metacritic}</h3>
                    )
                    :
                    (
                    <h3>No Metacritic Score</h3>
                    )}
                <span>
                <h3>Genres:</h3>
                    {game.genres && game.genres.map((genre) => (<p key={genre.id}>{genre.name}</p>))}
                </span>
                <span>
                <h3>Ratings:</h3>
                    {game.ratings && game.ratings.map((rating) => (
                        <p key={rating.id}>{rating.percent} {rating.title}</p>))}
                </span>
            </section>
            <section className={styles["details_section-two"]}>
                <p>{game.description_raw}</p>
            </section>
            <section className={styles["details_section-three"]}>
                <div>
                    <p>developer</p>
                    {game.developers && game.developers.map((developer) => (<h3 key={developer.id}>{developer.name}</h3>))}
                </div>
                <div>
                    <p>available at</p>
                    {game.stores && game.stores.map((store) => (
                        <ul key={store.id} className={styles["details_section_three-ul"]}>
                            <li className={styles["test-two"]}>
                                <Link to={`https://${store.store.domain}`}
                                      target="_blank" className={styles["details_tags"]} >{store.store.name}</Link>
                            </li>
                        </ul>))}
                </div>
                <div>
                    <p>tags</p>
                    {game.tags && game.tags.slice(0, 5).map((tag) => (
                        <ul key={tag.id}>
                            <li>{tag.name}</li>
                        </ul>))}
                </div>
                <div>
                    <Link to={`${game.website}`} target="_blank" className={styles["details_tags"]}>
                        website
                    </Link>
                </div>
            </section>
            <section className={styles["details_section-four"]}>
                {gameSeries.length > 0 ? (
                    <ul className={styles["details_section-four_ul"]}>
                        <p>related games:</p>
                        {gameSeries.map((series) => (
                            <li key={series.id} className={styles["details_section-four_li"]}>
                                <Link to={`/game/${series.id}`} className={styles["details_tags"]}>{series.name}</Link>
                            </li>
                        ))}
                    </ul>)
                    :
                    (
                        <p className={styles["details_section-four_p"]}>Not part of any series</p>
                    )}
            </section>
        </article>);
}

export default Details;
