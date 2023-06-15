import React, {useEffect, useState} from 'react';
import axios from "axios";
import Searchform from "../../components/searchform/Searchform";
import Card from "../../components/card/Card";

function Search() {
    const [gameData, setGameData] = useState([]);
    const [query, setQuery] = useState("");

    useEffect(() => {
        async function fetchGameData(){
            try{
                const result = await axios.get('https://api.rawg.io/api/games?key=bbf3b0834c524431ae361ae59491575b', {
                    params: {
                        search: query,
                        page_size: 10,
                    }
                })
                setGameData(result.data)
                console.log(result.data.results);
            }catch(e) {
                console.error(e);
            }
        }

        if(query){
            fetchGameData();
        }

    }, [query])

    return (
        <>
            <h1>*is this thing on?*</h1>
            <Searchform handleOnChange={setQuery} />
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
//
// <>
//     {/*<img src={gameData.results[0].background_image} alt="image" width="400" height="200"/>*/}
//     {/*<p>{gameData.results[0].name}</p>*/}
//     {/*<p>{gameData.results[0].metacritic}</p>*/}
//     {/*<p>{gameData.results[0].genres[0].name}</p><p>{gameData.results[0].genres[1].name}</p>*/}
// </>