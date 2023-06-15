import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import Details from "../../components/details/Details";

function GameDetail() {
    const [game, setGame] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        async function fetchGameDetails() {
            try {
                const result = await axios.get(
                    `https://api.rawg.io/api/games/${id}?key=bbf3b0834c524431ae361ae59491575b`
                );
                setGame(result.data);
                console.log(result.data);
            } catch (error) {
                console.error(error);
            }
        }

        fetchGameDetails();
    }, [id]);

    return (
        <Details game={game}/>
    );
}

export default GameDetail;
