import { FC } from 'react';
import { Button } from '@mantine/core';
import _ from 'lodash';

type Props = {
  setGrid: void;
};

const CharacterBoard: FC<Props> = ({ grid, setGrid }) => {
  const moveRight = () => {
    setGrid(() => {
      const newGrid = _.cloneDeep(grid);
      grid.forEach((row, i) =>
        row.forEach((tile, j) => {
          console.log(tile);
          if (tile.character && j < 5) {
            const newTile = _.cloneDeep(tile);
            delete newTile.character;
            newGrid[i][j] = newTile;
            const prevCell = _.cloneDeep(grid[i][j + 1]);
            newGrid[i][j + 1] = { ...prevCell, character: 'Agustin' };
          }
        })
      );
      return newGrid;
    });
  };

  const moveLeft = () => {
    setGrid(() => {
      const newGrid = _.cloneDeep(grid);
      grid.forEach((row, i) =>
        row.forEach((tile, j) => {
          if (tile.character && j > 0) {
            const newTile = _.cloneDeep(tile);
            delete newTile.character;
            newGrid[i][j] = newTile;
            const prevCell = _.cloneDeep(grid[i][j - 1]);
            newGrid[i][j - 1] = { ...prevCell, character: 'Agustin' };
          }
        })
      );
      return newGrid;
    });
  };

  const moveUp = () => {
    setGrid(() => {
      const newGrid = _.cloneDeep(grid);
      grid.forEach((row, i) =>
        row.forEach((tile, j) => {
          if (tile.character && i > 0) {
            const newTile = _.cloneDeep(tile);
            delete newTile.character;
            newGrid[i][j] = newTile;
            const prevCell = _.cloneDeep(grid[i - 1][j]);
            newGrid[i - 1][j] = { ...prevCell, character: 'Agustin' };
          }
        })
      );
      return newGrid;
    });
  };

  const moveDown = () => {
    setGrid(() => {
      const newGrid = _.cloneDeep(grid);
      grid.forEach((row, i) =>
        row.forEach((tile, j) => {
          if (tile.character && i < 5) {
            const newTile = _.cloneDeep(tile);
            delete newTile.character;
            newGrid[i][j] = newTile;
            const prevCell = _.cloneDeep(grid[i + 1][j]);
            newGrid[i + 1][j] = { ...prevCell, character: 'Agustin' };
          }
        })
      );
      return newGrid;
    });
  };

  return (
    <>
      <Button onClick={moveLeft}>Move Left</Button>
      <Button onClick={moveRight}>Move Right</Button>
      <Button onClick={moveUp}>Move Up</Button>
      <Button onClick={moveDown}>Move Down</Button>
    </>
  );
};

export default CharacterBoard;