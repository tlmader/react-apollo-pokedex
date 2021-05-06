import { usePokemonDetails } from '../../hooks';
import { AttributeList } from './AttributeList';
import { AttributeTable, AttributeTableTuple } from './AttributeTable';

export const PokemonAttributes = () => {
  const { pokemon } = usePokemonDetails();

  const attributes: AttributeTableTuple[] = pokemon
    ? [
        ['Base Experience', `${pokemon.baseExperience} XP`],
        ['Weight', `${pokemon.weight / 10}kg`],
        ['Height', `${pokemon.height / 10}m`],
      ]
    : [];

  const stats: AttributeTableTuple[] =
    pokemon?.stats?.map((stat) => [stat?.name, stat?.baseStat]) || [];

  return pokemon ? (
    <>
      <AttributeTable attributes={attributes} />
      <AttributeTable attributes={stats} />
      <AttributeList items={pokemon.abilities} title="Possible Abilities" />
      <AttributeList items={pokemon.heldItems} title="Held Items" />
      <AttributeList items={pokemon.moves} title="Learnable Moves" />
    </>
  ) : null;
};
