import { Text, Center, Grid, Button } from '@mantine/core';
import { FC } from 'react';

type Props = {
  deck: string[];
  discardDeck: string[];
  setDiscardDeck: any;
};

const Deck: FC<Props> = ({ deck, discardDeck, setDiscardDeck }) => (
  <Grid>
    <Grid.Col span={6}>
      <Button
        style={{ height: '200px', width: '150px', backgroundColor: 'black' }}
        onClick={() => {
          const removedCard: string = JSON.stringify(deck.pop());
          setDiscardDeck((prev: string[]) => {
            const newArray = [...prev];
            newArray.push(removedCard);
            return newArray;
          });
        }}
      >
        <Text color="white">{deck[deck.length - 1]}</Text>
      </Button>
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

export default Deck;
