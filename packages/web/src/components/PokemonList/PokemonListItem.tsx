import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@material-ui/core';
import { CSSProperties } from 'react';
import { PokemonNode } from '../../types';

export type PokemonListItemProps = {
  pokemon?: Partial<PokemonNode>;
  style: CSSProperties;
};

export const PokemonListItem = ({ pokemon, style }: PokemonListItemProps) => {
  return (
    <ListItem alignItems="flex-start" style={style}>
      <ListItemAvatar>
        <Avatar
          alt={pokemon?.name}
          src={pokemon?.sprites?.frontDefault || ''}
        />
      </ListItemAvatar>
      <ListItemText primary={pokemon?.name} secondary={pokemon?.id} />
    </ListItem>
  );
};
