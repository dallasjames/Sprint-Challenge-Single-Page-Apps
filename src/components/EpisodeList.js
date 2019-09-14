import React, { useEffect, useState } from "react";
import axios from "axios";
import EpisodeCard from './EpisodeCard';

export default function EpisodeList() {
    const [episode, setEpisode] = useState([]);

    useEffect(() => {
        axios.get("https://rickandmortyapi.com/api/episode")
            .then(res => {
                console.log(res)
                const asdf = res.data.results
                setEpisode(asdf)
            })
            .catch(err => {
                console.log(err)
            })
    }, episode, setEpisode)

    return (
        <>
        {Array.from(episode).map(asdf => (
            <EpisodeCard key={asdf.id}
            episode={asdf.episode}
            name={asdf.name}
            date={asdf.airDate}
            />
        ))}
        </>
    )
}