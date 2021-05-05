import {
  Avatar,
  createStyles,
  Divider,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles,
  Theme,
} from '@material-ui/core';
import { CSSProperties } from 'react';
import { PokemonNode } from '../../types';

export type PokemonListItemProps = {
  pokemon?: Partial<PokemonNode>;
  style: CSSProperties;
};

export const PokemonListItem = ({ pokemon, style }: PokemonListItemProps) => {
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
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    avatar: {
      backgroundColor: theme.palette.grey['200'],
    },
  }),
);
