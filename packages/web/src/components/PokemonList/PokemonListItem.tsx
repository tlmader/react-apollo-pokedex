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
import { useSetRecoilState } from 'recoil';
import { selectedPokemonState } from '../../state';
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

  const setSelectedPokemon = useSetRecoilState(selectedPokemonState);

  const handleClick = () => setSelectedPokemon(pokemon);

  return (
    <>
      <ListItem
        alignItems="flex-start"
        style={style}
        button
        onClick={handleClick}
      >
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
