import React from "react";
import { Card, Image } from 'semantic-ui-react';

export default function CharacterCard(props) {
  return (
    <>
      <Card>
        <Image src={props.characterImg} alt={props.name} />
        <Card.Content>
          <Card.Header>{props.characterName}</Card.Header>
          <Card.Meta>
            <span>{props.characterSpecies}</span>
            <span>{props.characterStatus}</span>
          </Card.Meta>
          <Card.Description>
            Location: {props.characterLocation}<br/>
            Origin: {props.characterOrigin}
          </Card.Description>
        </Card.Content>
      </Card>
    </>
  )
}
