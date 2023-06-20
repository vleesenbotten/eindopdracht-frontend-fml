import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Searchform from '../../components/searchform/Searchform';
import Card from '../../components/card/Card';

function Search() {
    const [gameData, setGameData] = useState([]);
    const [query, setQuery] = useState('');
    const [genre, setGenre] = useState("");
    const [tag, setTag] = useState("");
    const [developer, setDeveloper] = useState("");
    const [platform, setPlatform] = useState("");

    useEffect(() => {
        async function fetchGameData() {
            try {
                // initial values for my axios.get request
                const params = {
                    search: query,
                    page_size: 25,
                }
                // the conditional statements ensure that the filter options can be left empty
                if(genre){
                    params.genres = genre;
                } if(tag){
                    params.tags = tag;
                } if(developer){
                    params.developers = developer;
                } if(platform){
                    params.platforms = platform;
                }

                const result = await axios.get(
                    'https://api.rawg.io/api/games?key=bbf3b0834c524431ae361ae59491575b',
                    {
                        params: params,
                    }
                );
                setGameData(result.data);
                console.log(result.data.results);
            } catch (e) {
                console.error(e);
            }
        }

        if (query) {
            fetchGameData();
        }
    }, [query, genre]);

    return (
        <>
            <h1>*is this thing on?*</h1>
            <Searchform
                handleSearch={setQuery}
            />
            {Object.keys(gameData).length > 0 && (
                <>
                    {gameData.results && gameData.results.length > 0 ? (
                        gameData.results.map((game) => (
                            <Card key={game.id} game={game} />
                        ))
                    ) : (
                        <p>no results found.</p>
                    )}
                </>
            )}
        </>
    );
}

export default Search;
