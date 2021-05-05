import { useRecoilValue } from 'recoil';
import {
  ListPokemonQueryVariables,
  useListPokemonQuery,
} from '../../operations';
import { searchState, sortState, speciesState, typeState } from '../../state';
import produce from 'immer';

export const useListPokemon = () => {
  const search = useRecoilValue(searchState);
  const type = useRecoilValue(typeState);
  const species = useRecoilValue(speciesState);
  const sort = useRecoilValue(sortState);

  // Construct the variables object to only include properties we are using
  const variables: ListPokemonQueryVariables = {
    sort,
    first: 50,
  };
  if (search || type || species) {
    variables.filter = {};
    if (search) {
      variables.filter = {
        name: {
          contains: search,
        },
      };
    }
    if (species) {
      variables.filter.species = species;
    }
    if (type) {
      variables.filter.type = type;
    }
  }

  const { data, loading, fetchMore } = useListPokemonQuery({
    variables,
  });

  const items = data?.listPokemon?.edges?.map((edge) => edge?.node) || [];
  const endCursor = data?.listPokemon?.pageInfo?.endCursor;
  const hasNextPage = data?.listPokemon?.pageInfo?.hasNextPage;

  const fetchNextPage = () => {
    if (hasNextPage && endCursor) {
      return fetchMore({
        variables: produce(variables, (draftVariables) => {
          draftVariables.after = endCursor;
          return draftVariables;
        }),
      });
    }
    return null;
  };

  return { items, loading, hasNextPage, fetchNextPage };
};
