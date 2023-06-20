import React, {useContext, useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import Details from "../../components/details/Details";


function GameDetail() {
    const [game, setGame] = useState([]);
    const [gameSeries, setGameSeries] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        async function fetchGameDetails() {
            try {
                const result = await axios.get(
                    `https://api.rawg.io/api/games/${id}?key=bbf3b0834c524431ae361ae59491575b`
                );
                setGame(result.data);
                // console.log(result.data);
            } catch (error) {
                console.error(error);
            }
        }
        async function fetchGameSeries() {
            try {
                const result = await axios.get(
                    `https://api.rawg.io/api/games/${id}/game-series?key=bbf3b0834c524431ae361ae59491575b`
                );
                setGameSeries(result.data.results);
                // console.log(result.data.results);
            } catch (error) {
                console.error(error);
            }
        }

        fetchGameSeries();
        fetchGameDetails();
    }, [id]);

    return (
        <Details key={game.id} game={game} gameSeries={gameSeries} />
    );
}

export default GameDetail;
