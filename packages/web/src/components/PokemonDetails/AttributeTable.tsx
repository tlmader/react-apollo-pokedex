import { createStyles, makeStyles, Theme, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grid: {
      display: 'grid',
      gridGap: theme.spacing(1),
      gridTemplateColumns: `repeat(auto-fill, minmax(150px, 1fr))`,
    },
  }),
);

export type AttributeTableTuple = [
  string | undefined,
  string | number | undefined,
];

export type AttributeTableProps = {
  attributes: AttributeTableTuple[] | null;
};

export const AttributeTable = ({ attributes }: AttributeTableProps) => {
  const styles = useStyles();

  return attributes ? (
    <>
      <dl className={styles.grid}>
        {attributes.map(([label, value]) => (
          <div>
            <Typography component="dt" variant="caption">
              {label}
            </Typography>
            <Typography component="dd" variant="body2">
              {value}
            </Typography>
          </div>
        ))}
      </dl>
    </>
  ) : null;
};
