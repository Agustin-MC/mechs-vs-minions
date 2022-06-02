import { tile } from '@components/Game/Board/index';

const RUNES = { RED: 'red', GREEN: 'green', BLUE: 'blue', YELLOW: 'yellow' };

const ONE: tile[][] = [
  [{ rune: RUNES.GREEN }, {}, {}, {}, {}, { rune: RUNES.GREEN }],
  [{ character: 'Agustin' }, { character: 'Agustin' }, {}, {}, {}, {}],
  [{}, {}, {}, {}, {}, {}],
  [{}, {}, { rune: RUNES.RED }, { rune: RUNES.RED }, {}, {}],
  [{}, { rune: RUNES.BLUE }, {}, {}, { rune: RUNES.BLUE }, {}],
  [{}, {}, {}, { rune: RUNES.YELLOW }, {}, {}],
];

const TILES = { ONE };

export default TILES;
