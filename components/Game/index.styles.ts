import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  border: {
    borderWidth: 2,
    backgroundColor: theme.white,
    borderColor: theme.black,
    borderStyle: 'solid',
  },
  circle: {
    height: '100%',
    width: '100%',
    backgroundColor: theme.colors.lime,
    borderColor: theme.colors.yellow,
    borderRadius: '50%',
    borderStyle: 'solid',
  },
}));
