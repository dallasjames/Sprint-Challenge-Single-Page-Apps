import React, { useEffect, useState } from "react";
import axios from "axios";
import LocationCard from './LocationCard';

export default function LocationsList() {
    const [location, setLocation] = useState([]);

    useEffect(() => {
        axios.get("https://rickandmortyapi.com/api/location")
            .then(res => {
                console.log(res)
                const place = res.data.results
                setLocation(place)
            })
            .catch(err => {
                console.log(err)
            })
    }, location, setLocation)

    return (
        <div className='character-card'>
        {Array.from(location).map(place => (
            <LocationCard key={place.id}
            name={place.name}
            dimension={place.dimension}
            type={place.type}
            residents={place.residents.length}
            />
        ))}
        </div>
    )
}
