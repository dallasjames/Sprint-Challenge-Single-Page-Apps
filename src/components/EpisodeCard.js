import React from "react";
import { Card } from 'semantic-ui-react'
 
export default function LocationCard({ name, episode, date }) {
  return (
    <Card>
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Description>Episode: {episode}</Card.Description>
        <Card.Description>Air Date: {date}</Card.Description>
      </Card.Content>
    </Card>
  )
}