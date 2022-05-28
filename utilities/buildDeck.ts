import _ from 'lodash';
import C from '@utilities/constants';

const buildDeck = () => {
  const deck = [];

  for (let i = 0; i < 8; i++) {
    Object.values(C.CARD_NAMES).forEach((card) => {
      deck.push(card);
    });
  }
  return deck;
};

export const shuffleDeck = (deck: string[] = []) => _.shuffle(deck);

export default buildDeck;
