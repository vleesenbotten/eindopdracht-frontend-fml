import React, { useState } from 'react';
import Button from "../button/Button";


function Searchform({ handleOnChange }) {
    const [query, setQuery] = useState("");

    function onFormSubmit(e){
        e.preventDefault();
        handleOnChange(query);
    }

    return (
        <form onSubmit={onFormSubmit}>
            <input
                type="text"
                name="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="search"
            />
            <Button type="submit" name="boom 🧨"/>
        </form>

    );
}

export default Searchform;