import { Text, Center, Grid } from '@mantine/core';
import { useState } from 'react';

const Deck = ({ deck, discardDeck, setDiscardDeck }) => {
  return (
    <Grid>
      <Grid.Col span={6}>
        <Center
          style={{ height: '200px', width: '150px', backgroundColor: 'black' }}
          onClick={() => {
            const removedCard = deck.pop();
            setDiscardDeck((prev: string[]) => {
              const newArray = [...prev];
              newArray.push(removedCard);
              return newArray;
            });
          }}
        >
          <Text color="white">{deck[deck.length - 1]}</Text>
        </Center>
      </Grid.Col>
      <Grid.Col span={6}>
        <Center
          style={{
            height: '200px',
            width: '150px',
            backgroundColor: 'gray',
            borderWidth: 2,
            borderStyle: 'solid',
          }}
        >
          <Text color="white">
            {discardDeck.length ? discardDeck[discardDeck.length - 1] : 'Discard Pile'}
          </Text>
        </Center>
      </Grid.Col>
    </Grid>
  );
};

export default Deck;
