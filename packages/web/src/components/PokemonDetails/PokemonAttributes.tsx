import { usePokemonDetails } from '../../hooks';
import { AttributeList } from './AttributeList';
import { AttributeTable, AttributeTableTuple } from './AttributeTable';
import { PokemonGrowthChart } from './PokemonGrowthChart';

export const PokemonAttributes = () => {
  const { pokemon } = usePokemonDetails();

  if (!pokemon) {
    return null;
  }

  const {
    baseExperience,
    weight,
    height,
    abilities,
    heldItems,
    moves,
    stats,
  } = pokemon;

  const attributes: AttributeTableTuple[] = [
    ['Base Experience', `${baseExperience} XP`],
    ['Weight', weight ? `${weight / 10}kg` : '?'],
    ['Height', height ? `${height / 10}m` : '?'],
  ];

  const statAttributes: AttributeTableTuple[] =
    stats?.map((stat) => [stat?.name, stat?.baseStat]) || [];

  return (
    <>
      <AttributeTable attributes={attributes} />
      <PokemonGrowthChart />
      <AttributeTable attributes={statAttributes} />
      <AttributeList items={abilities} title="Possible Abilities" />
      <AttributeList items={heldItems} title="Held Items" />
      <AttributeList items={moves} title="Learnable Moves" />
    </>
  );
};
