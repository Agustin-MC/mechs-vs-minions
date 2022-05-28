import React from 'react';
import { Grid } from '@mantine/core';
import useStyles from '@components/Game/index.styles';

const Board = ({ grid, setGrid }) => {
  return (
    <Grid gutter={0} style={{ height: getSize(), width: getSize() }}>
      {grid.map((row, i) =>
        row.map((tile, j) => (
          <Grid.Col span={2} key={`position-${i}-${j}`}>
            <Cell tile={tile} />
          </Grid.Col>
        ))
      )}
    </Grid>
  );
};

type CellProps = {
  tile: {
    rune: string | undefined;
    character: string | undefined;
  };
};

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

const getSize = (divideBy = 1) => {
  const size = { value: 600, units: 'px' };
  return `${size.value / divideBy}${size.units}`;
};

export default Board;
