import { FC } from 'react';
import { Grid, Center, Text } from '@mantine/core';

type Props = {
  grid: Array<Array<Object>>;
  setGrid: void;
};

type SlotProps = {
  slot: number;
};

const Slot: FC<SlotProps> = ({ slot }) => (
  <Center style={{ backgroundColor: 'yellow', height: '240px', width: '100%' }}>
    <Text style={{ fontSize: 48 }}>{slot}</Text>
  </Center>
);

const Slots = () => (
  <Grid style={{ width: '1200px', backgroundColor: 'brown' }}>
    {[{ slot: 1 }, { slot: 2 }, { slot: 3 }, { slot: 4 }, { slot: 5 }, { slot: 6 }].map(
      ({ slot }) => (
        <Grid.Col span={2} key={`player-slot-${slot}`}>
          <Slot slot={slot} />
        </Grid.Col>
      )
    )}
  </Grid>
);

const CharacterBoard: FC = () => (
  // const moveRight = () => {
  //   setGrid(() => {
  //     const newGrid = _.cloneDeep(grid);
  //     grid.forEach((row, i) =>
  //       row.forEach((tile, j) => {
  //         console.log(tile);
  //         if (tile.character && j < 5) {
  //           const newTile = _.cloneDeep(tile);
  //           delete newTile.character;
  //           newGrid[i][j] = newTile;
  //           const prevCell = _.cloneDeep(grid[i][j + 1]);
  //           newGrid[i][j + 1] = { ...prevCell, character: 'Agustin' };
  //         }
  //       })
  //     );
  //     return newGrid;
  //   });
  // };
  //
  // const moveLeft = () => {
  //   setGrid(() => {
  //     const newGrid = _.cloneDeep(grid);
  //     grid.forEach((row, i) =>
  //       row.forEach((tile, j) => {
  //         if (tile.character && j > 0) {
  //           const newTile = _.cloneDeep(tile);
  //           delete newTile.character;
  //           newGrid[i][j] = newTile;
  //           const prevCell = _.cloneDeep(grid[i][j - 1]);
  //           newGrid[i][j - 1] = { ...prevCell, character: 'Agustin' };
  //         }
  //       })
  //     );
  //     return newGrid;
  //   });
  // };
  //
  // const moveUp = () => {
  //   setGrid(() => {
  //     const newGrid = _.cloneDeep(grid);
  //     grid.forEach((row, i) =>
  //       row.forEach((tile, j) => {
  //         if (tile.character && i > 0) {
  //           const newTile = _.cloneDeep(tile);
  //           delete newTile.character;
  //           newGrid[i][j] = newTile;
  //           const prevCell = _.cloneDeep(grid[i - 1][j]);
  //           newGrid[i - 1][j] = { ...prevCell, character: 'Agustin' };
  //         }
  //       })
  //     );
  //     return newGrid;
  //   });
  // };
  //
  // const moveDown = () => {
  //   setGrid(() => {
  //     const newGrid = _.cloneDeep(grid);
  //     grid.forEach((row, i) =>
  //       row.forEach((tile, j) => {
  //         if (tile.character && i < 5) {
  //           const newTile = _.cloneDeep(tile);
  //           delete newTile.character;
  //           newGrid[i][j] = newTile;
  //           const prevCell = _.cloneDeep(grid[i + 1][j]);
  //           newGrid[i + 1][j] = { ...prevCell, character: 'Agustin' };
  //         }
  //       })
  //     );
  //     return newGrid;
  //   });
  // };

  <>
    {/*<Button onClick={moveLeft}>Move Left</Button>*/}
    {/*<Button onClick={moveRight}>Move Right</Button>*/}
    {/*<Button onClick={moveUp}>Move Up</Button>*/}
    {/*<Button onClick={moveDown}>Move Down</Button>*/}
    <Slots />
  </>
);

export default CharacterBoard;
