import { createStyles, makeStyles, Theme, Typography } from '@material-ui/core';
import { Item } from '../../types';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grid: {
      display: 'grid',
      gridTemplateColumns: `repeat(auto-fill, minmax(150px, 1fr))`,
    },
  }),
);

export type AttributeListProps = {
  items: (Item | null)[];
  title: string;
};

export const AttributeList = ({ items, title }: AttributeListProps) => {
  const styles = useStyles();

  return (
    <>
      <Typography component="h2" variant="caption">
        {title} ({items.length})
      </Typography>
      <ul className={styles.grid}>
        {items.map((item) => (
          <Typography component="li" variant="body2">
            {item?.name}
          </Typography>
        ))}
      </ul>
    </>
  );
};
