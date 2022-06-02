import { FC } from 'react';
import { Grid } from '@mantine/core';
import useStyles from '@components/Game/index.styles';

export type tile = {
  rune?: string;
  character?: string;
};

type CellProps = { tile: tile };

type Props = {
  grid: tile[][];
};

const getSize = (divideBy: number = 1) => {
  const size = { value: 600, units: 'px' };
  return `${size.value / divideBy}${size.units}`;
};

const Cell: FC<CellProps> = ({ tile: { rune, character } }) => {
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

const Board: FC<Props> = ({ grid }) => (
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
export default Board;
