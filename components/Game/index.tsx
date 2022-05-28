import { FC, useState } from 'react';
import { Container, Center, Grid } from '@mantine/core';
import CharacterBoard from '@components/Game/CharacterBoard';
import Board from '@components/Game/Board';
import Settings from '@components/Game/Settings';
import Deck from '@components/Game/Deck';
import TILES from './Board/tiles';
import useStyles from './index.styles';
import buildDeck, { shuffleDeck } from '@utilities/buildDeck';

const Game: FC = () => {
  const [grid, setGrid] = useState(TILES.ONE);
  const [round, setRound] = useState({ phase: 'setup', players: [{ name: 'Agustin' }] });
  const [deck, setDeck] = useState(shuffleDeck(buildDeck()));
  const [discardDeck, setDiscardDeck] = useState([]);

  return (
    <Container fluid>
      <Grid my="1rem">
        <Grid.Col span={3}>
          <Deck deck={deck} discardDeck={discardDeck} setDiscardDeck={setDiscardDeck} />
        </Grid.Col>
        <Grid.Col span={6}>
          <Center>
            <div>
              <Board grid={grid} setGrid={setGrid} />
            </div>
          </Center>
        </Grid.Col>
        <Grid.Col span={3}>
          <Settings round={round} setRound={setRound} />
        </Grid.Col>
      </Grid>
      <Center>
        <CharacterBoard grid={grid} setGrid={setGrid} />
      </Center>
    </Container>
  );
};

export default Game;
