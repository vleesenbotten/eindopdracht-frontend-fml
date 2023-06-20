import React from 'react';
import Button from '../button/Button';
import {useForm} from "react-hook-form";

function Searchform({ handleSearch }) {
    const { register, handleSubmit } = useForm();

    function onSubmit(data){
        handleSearch(data.query, data.genres, data.tag, data.developers, data.platform);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" name="query" placeholder="search" {...register('query')}/>
            <select name="genre" {...register('genre')}>
                <option value="">any genre</option>
                <option value="4">action</option>
                <option value="3">adventure</option>
                <option value="5">rpg</option>
                <option value="1">racing</option>
                <option value="2">shooter</option>
                <option value="14">simulation</option>
            </select>
            <select name="tag" {...register('tag')}>
                <option value="">any tags</option>
                <option value="31">singleplayer</option>
                <option value="7">multiplayer</option>
                <option value="18">co-op</option>
                <option value="36">open world</option>
                <option value="118">story rich</option>
                <option value="32">sci-fi</option>
                <option value="16">horror</option>
                <option value="64">fantasy</option>
                <option value="1">survival</option>
                <option value="117">mystery</option>
                <option value="74">retro</option>
                <option value="102">turn-based</option>
                <option value="145">choices matter</option>
                <option value="99">isometric</option>
                <option value="122">pixel graphics</option>
            </select>
            <select name="developer" {...register('developer')}>
                <option value="">any developer</option>
                <option value="383">2k games</option>
                <option value="386">bandai namco</option>
                <option value="4207">bethesda</option>
                <option value="8933">bioware</option>
                <option value="3678">capcom</option>
                <option value="9023">cd projekt red</option>
                <option value="22">deep silver</option>
                <option value="436">devolver digital</option>
                <option value="109">electronic arts</option>
                <option value="4015">gearbox software</option>
                <option value="343">id software</option>
                <option value="1971">konami</option>
                <option value="13071">naughty dog</option>
                <option value="16257">nintendo</option>
                <option value="10">rockstar games</option>
                <option value="425">sega</option>
                <option value="4132">square enix</option>
                <option value="694">telltale games</option>
                <option value="405">ubisoft</option>
                <option value="1612">valve software</option>
                <option value="3">warner bros</option>
            </select>
            <select name="platform" {...register('platform')}>
                <option value="">any platform</option>
                <option value="4">pc</option>
                <option value="187">playstation 5</option>
                <option value="18">playstation 4</option>
                <option value="1">xbox one</option>
                <option value="14">xbox 360</option>
                <option value="7">nintendo switch</option>
            </select>
            <Button type="submit" name="boom 🧨" />
        </form>
    );
}

export default Searchform;
