import { CircularProgress, Typography } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import clsx from 'clsx';
import AutoSizer from 'react-virtualized-auto-sizer';
import { FixedSizeList, ListChildComponentProps } from 'react-window';
import InfiniteLoader from 'react-window-infinite-loader';
import { PokemonNode } from '../../types';
import { useListPokemon } from '../hooks';
import { PokemonListItem } from './PokemonListItem';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: '100%',
      width: '100%',
    },
    mainLoader: {
      padding: theme.spacing(2),
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

  const Row = ({ index, style }: ListChildComponentProps<PokemonNode>) => {
    const item = items[index];
    return index === items.length ? (
      <div style={style} className={styles.circularProgress}>
        <CircularProgress title="Loading" />
        <Typography variant="overline">Loading more Pokémon…</Typography>
      </div>
    ) : (
      <PokemonListItem style={style} key={item?.name} pokemon={item} />
    );
  };

  const { items, loading, hasNextPage, fetchNextPage } = useListPokemon();

  const itemCount = hasNextPage ? items.length + 1 : items.length;

  return loading ? (
    <div className={clsx(styles.mainLoader, styles.circularProgress)}>
      <CircularProgress title="Loading" />
      <Typography variant="overline">Loading Pokémon…</Typography>
    </div>
  ) : (
    <div className={styles.root}>
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
