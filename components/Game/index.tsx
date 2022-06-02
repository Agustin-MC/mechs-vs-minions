import { FC, useState } from 'react';
import { Container, Center, Grid } from '@mantine/core';
import CharacterBoard from '@components/Game/CharacterBoard';
import Board from '@components/Game/Board';
import Settings from '@components/Game/Settings';
import Deck from '@components/Game/Deck';
import buildDeck, { shuffleDeck } from '@utilities/buildDeck';
import TILES from './Board/tiles';
import { tile } from './Board';

export type round = {
  phase: string;
  players: { name: string }[];
};

const Game: FC = () => {
  const [grid] = useState<tile[][]>(TILES.ONE);
  const [round, setRound] = useState<round>({ phase: 'setup', players: [{ name: 'Agustin' }] });
  const [deck] = useState<string[]>(shuffleDeck(buildDeck()));
  const [discardDeck, setDiscardDeck] = useState<string[]>([]);

  return (
    <Container fluid>
      <Grid my="1rem">
        <Grid.Col span={3}>
          <Deck deck={deck} discardDeck={discardDeck} setDiscardDeck={setDiscardDeck} />
        </Grid.Col>
        <Grid.Col span={6}>
          <Center>
            <div>
              <Board grid={grid} />
            </div>
          </Center>
        </Grid.Col>
        <Grid.Col span={3}>
          <Settings round={round} setRound={setRound} />
        </Grid.Col>
      </Grid>
      <Center>
        <CharacterBoard />
      </Center>
    </Container>
  );
};

export default Game;
