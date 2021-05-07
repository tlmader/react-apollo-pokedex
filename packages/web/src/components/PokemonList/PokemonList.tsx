import { Divider, Toolbar, Typography } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AutoSizer from 'react-virtualized-auto-sizer';
import { FixedSizeList, ListChildComponentProps } from 'react-window';
import InfiniteLoader from 'react-window-infinite-loader';
import { PokemonNode } from '../../types';
import { useListPokemon } from '../../hooks';
import { Loading } from '../Loading';
import { PokemonListItem } from './PokemonListItem';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      // Adjust for toolbar and divider
      height: 'calc(100% - 65px)',
      width: '100%',
      [theme.breakpoints.down('xs')]: {
        // Toolbar is smaller in xs
        height: 'calc(100% - 55px)',
      },
    },
    message: {
      padding: theme.spacing(2),
      display: 'grid',
      justifyContent: 'center',
      alignItems: 'center',
    },
    circularProgress: {
      display: 'grid',
      gridAutoFlow: 'column',
      gridGap: theme.spacing(2),
      justifyContent: 'center',
      alignItems: 'center',
    },
  }),
);

export const PokemonList = () => {
  const styles = useStyles();

  const {
    items,
    loading,
    hasNextPage,
    fetchNextPage,
    totalCount,
  } = useListPokemon();

  const Row = ({ index, style }: ListChildComponentProps<PokemonNode>) => {
    const item = items[index];
    return index === items.length ? (
      <Loading style={style} title="Loading more Pokémon…" padding={false} />
    ) : (
      <PokemonListItem style={style} key={item?.name} pokemon={item} />
    );
  };

  const itemCount = hasNextPage ? items.length + 1 : items.length;

  if (loading) {
    return <Loading title="Loading Pokémon…" />;
  }

  if (!itemCount) {
    return (
      <div className={styles.message}>
        <Typography variant="overline">No Pokémon found</Typography>
      </div>
    );
  }

  return (
    <div className={styles.root} data-testId="pokemon-list">
      <Toolbar>
        <Typography variant="overline">{totalCount} Pokémon found!</Typography>
      </Toolbar>
      <Divider />
      <AutoSizer>
        {({ height, width }) => (
          <InfiniteLoader
            isItemLoaded={(index) => index < items.length}
            itemCount={itemCount}
            loadMoreItems={fetchNextPage}
          >
            {({ onItemsRendered, ref }) => (
              <FixedSizeList
                height={height}
                width={width}
                itemCount={itemCount}
                itemSize={64}
                onItemsRendered={onItemsRendered}
                ref={ref}
              >
                {Row}
              </FixedSizeList>
            )}
          </InfiniteLoader>
        )}
      </AutoSizer>
    </div>
  );
};
