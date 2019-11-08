import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard';

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character")
      .then(res => {
        console.log(res)
        const char = res.data.results
        setCharacters(char)
      })
      .catch((err) => {
        console.log(err)
      })

  }, characters, setCharacters);

  return (
    <div className='character-card'>
      {Array.from(characters).map(character => (
        <CharacterCard key={character.id}
        characterImg={character.image}
        characterName={character.name}
        characterSpecies={character.species} 
        characterStatus={character.stauts}
        characterLocation={character.location.name}
        characterOrigin={character.origin.name}
        />
      ))}
    </div>
  );
}
