import {
  Avatar,
  createStyles,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles,
  Theme,
} from '@material-ui/core';
import { CSSProperties, memo } from 'react';
import { PokemonNode } from '../../types';

export type PokemonListItemProps = {
  pokemon?: Partial<PokemonNode>;
  style: CSSProperties;
};

// Memo to prevent re-render when resizing screen caused by AutoSizer
export const PokemonListItem = memo(function ({
  pokemon,
  style,
}: PokemonListItemProps) {
  const styles = useStyles();
  return (
    <>
      <ListItem alignItems="flex-start" style={style}>
        <ListItemAvatar>
          <Avatar
            className={styles.avatar}
            alt={pokemon?.name}
            src={pokemon?.sprites?.frontDefault || ''}
          />
        </ListItemAvatar>
        <ListItemText primary={pokemon?.name} secondary={pokemon?.id} />
      </ListItem>
    </>
  );
});

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    avatar: {
      backgroundColor: theme.palette.grey['200'],
    },
  }),
);
