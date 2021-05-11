import { createStyles, makeStyles, Typography } from '@material-ui/core';
import { Item } from '../../types';

const useStyles = makeStyles(() =>
  createStyles({
    grid: {
      display: 'grid',
      gridTemplateColumns: `repeat(auto-fill, minmax(150px, 1fr))`,
    },
  }),
);

export type AttributeListProps = {
  items?: (Item | null)[] | null;
  title?: string;
};

export const AttributeList = ({ items, title }: AttributeListProps) => {
  const styles = useStyles();

  if (!items) {
    return null;
  }

  return (
    <>
      <Typography component="h2" variant="caption">
        {title} ({items.length})
      </Typography>
      <ul className={styles.grid}>
        {items.map((item) => (
          <Typography component="li" variant="body2" key={item?.name}>
            {item?.name}
          </Typography>
        ))}
      </ul>
    </>
  );
};
