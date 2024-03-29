import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Details from "../../components/details/Details";
import Error from "../../components/error/Error";
import Loading from "../../components/loading/Loading";
import styles from "./GameDetails.module.css";

function GameDetail() {
    const apiKey = "";
    const [game, setGame] = useState([]);
    const [gameSeries, setGameSeries] = useState([]);
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        async function fetchData() {
            try {
                toggleLoading(true);
                toggleError(false);
                const [gameResponse, gameSeriesResponse] = await Promise.all([
                    axios.get(`https://api.rawg.io/api/games/${id}?key=${apiKey}`),
                    axios.get(`https://api.rawg.io/api/games/${id}/game-series?key=${apiKey}`)
                ]);

                setGame(gameResponse.data);
                setGameSeries(gameSeriesResponse.data.results);
            } catch (error) {
                console.error(error);
                toggleError(true);
            }
            toggleLoading(false);
        }

        fetchData();
    }, [id]);

    return (
        <section className={styles["game-details_container"]}>
            {loading && <Loading/>}
            {error && <Error message="Failed to fetch game details." />}
            <Details key={game.id} game={game} gameSeries={gameSeries} />
        </section>
    );
}

export default GameDetail;
