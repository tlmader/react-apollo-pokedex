import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react';
import { FixedSizeList, ListChildComponentProps } from 'react-window';
import InfiniteLoader from 'react-window-infinite-loader';
import { useRecoilValue } from 'recoil';
import { useListPokemonQuery } from '../../operations';
import { searchState, sortState, speciesState, typeState } from '../../state';
import { PokemonNode } from '../../types';
import { PokemonListItem } from './PokemonListItem';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      height: 400,
      maxWidth: 300,
      backgroundColor: theme.palette.background.paper,
    },
  }),
);

export const PokemonList = () => {
  const search = useRecoilValue(searchState);
  const type = useRecoilValue(typeState);
  const species = useRecoilValue(speciesState);
  const sort = useRecoilValue(sortState);

  console.log({ sort });

  const { data, fetchMore } = useListPokemonQuery({
    variables: {
      filter: {
        name: {
          contains: search,
        },
        species,
        type,
      },
      sort,
    },
  });

  const items = data?.listPokemon?.edges?.map((edge) => edge?.node) || [];
  const endCursor = data?.listPokemon?.pageInfo?.endCursor;
  const hasNextPage = data?.listPokemon?.pageInfo?.hasNextPage;

  const styles = useStyles();

  const Row = ({ index, style }: ListChildComponentProps<PokemonNode>) => {
    const item = items[index];
    return <PokemonListItem style={style} key={item?.name} pokemon={item} />;
  };

  const itemCount = hasNextPage ? items.length + 1 : items.length;

  const handleLoadMoreItems = () => {
    if (hasNextPage && endCursor) {
      return fetchMore({
        variables: {
          filter: {
            name: {
              contains: search,
            },
            species,
            type,
          },
          sort,
          after: endCursor,
        },
      });
    }
    return null;
  };

  return (
    <InfiniteLoader
      isItemLoaded={(index) => index < items.length}
      itemCount={itemCount}
      loadMoreItems={handleLoadMoreItems}
    >
      {({ onItemsRendered, ref }) => (
        <div className={styles.root}>
          <FixedSizeList
            height={600}
            width={500}
            itemCount={itemCount}
            itemSize={64}
            onItemsRendered={onItemsRendered}
            ref={ref}
          >
            {Row}
          </FixedSizeList>
        </div>
      )}
    </InfiniteLoader>
  );
};
