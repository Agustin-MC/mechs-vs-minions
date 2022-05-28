import React, { useState } from 'react';
import { Center, Grid } from '@mantine/core';
import CharacterBoard from '@components/Game/CharacterBoard';
import useStyles from './index.styles';

const RUNES = { RED: 'red', GREEN: 'green', BLUE: 'blue', YELLOW: 'yellow' };

type CellProps = {
  tile: {
    rune: string | undefined;
    character: string | undefined;
  };
  i: number;
  j: number;
};

const tileOne = [
  [{ rune: RUNES.GREEN }, {}, {}, {}, {}, { rune: RUNES.GREEN }],
  [{ character: 'Agustin' }, { character: 'Agustin' }, {}, {}, {}, {}],
  [{}, {}, {}, {}, {}, {}],
  [{}, {}, { rune: RUNES.RED }, { rune: RUNES.RED }, {}, {}],
  [{}, { rune: RUNES.BLUE }, {}, {}, { rune: RUNES.BLUE }, {}],
  [{}, {}, {}, { rune: RUNES.YELLOW }, {}, {}],
];

const size = { value: 600, units: 'px' };
const getSize = (divideBy = 1) => `${size.value / divideBy}${size.units}`;

const Cell: React.FC<CellProps> = ({ tile: { rune, character } }) => {
  const { classes } = useStyles();
  return (
    <div
      style={{ backgroundColor: rune, height: getSize(6), width: '100%' }}
      className={classes.border}
    >
      {character && <div className={classes.circle} />}
    </div>
  );
};

const Game: React.FC = () => {
  const [grid, setGrid] = useState(tileOne);

  return (
    <Center my="2rem">
      <div>
        <Grid gutter={0} style={{ height: getSize(), width: getSize() }}>
          {grid.map((row, i) =>
            row.map((tile, j) => (
              <Grid.Col span={2}>
                <Cell tile={tile} i={i} j={j} />
              </Grid.Col>
            ))
          )}
        </Grid>
        <CharacterBoard grid={grid} setGrid={setGrid} />
      </div>
    </Center>
  );
};

export default Game;
