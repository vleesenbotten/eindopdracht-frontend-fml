import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Searchform from '../../components/searchform/Searchform';
import Card from '../../components/card/Card';
import Error from "../../components/error/Error";
import Loading from "../../components/loading/Loading";
import styles from "./Search.module.css";
import Background from "../../components/background/Background";

function Search() {
    const apiKey = "";
    const [gameData, setGameData] = useState([]);
    const [query, setQuery] = useState('');
    const [genre, setGenre] = useState("");
    const [tag, setTag] = useState("");
    const [developer, setDeveloper] = useState("");
    const [platform, setPlatform] = useState("");
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);

    useEffect(() => {
        async function fetchGameData() {
            try {
                toggleLoading(true);
                toggleError(false);

                const params = {
                    search: query,
                    page_size: 10,
                }

                if (genre) {
                    params.genres = genre;
                }
                if (tag) {
                    params.tags = tag;
                }
                if (developer) {
                    params.developers = developer;
                }
                if (platform) {
                    params.platforms = platform;
                }

                const result = await axios.get(
                    `https://api.rawg.io/api/games?key=${apiKey}`,
                    {
                        params: params,
                    }
                );

                setGameData(result.data);
                console.log(result.data.results);
            } catch (e) {
                console.error(e);
                toggleError(true);
            }
                toggleLoading(false);
        }

        if (query) {
            fetchGameData();
        }
    }, [query, genre, tag, developer, platform]);

    return (
        <section className={styles["search_outer-container"]}>
            <h1>search for games</h1>
            {loading && <Loading/>}
            <Searchform handleSearch={setQuery} />
                {Object.keys(gameData).length > 0 && (
                    <section className={styles["search_cards-container"]}>
                        {gameData.results && gameData.results.length > 0 ? (
                            gameData.results.map((game) => <Card key={game.id} game={game} />)
                        ) : (
                            <p>no results found.</p>
                        )}
                    </section>
                )}
            <Background />
            {error && <Error message="something went wrong :(" />}
        </section>
    );
}

export default Search;
