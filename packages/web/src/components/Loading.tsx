import {
  CircularProgress,
  createStyles,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core';
import clsx from 'clsx';
import { CSSProperties } from 'react';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    padding: {
      padding: theme.spacing(2),
    },
    container: {
      display: 'grid',
      gridGap: theme.spacing(2),
      gridAutoFlow: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
  }),
);

export type LoadingProps = {
  title: string;
  padding?: boolean;
  style?: CSSProperties;
};

export const Loading = ({ title, padding = true, style }: LoadingProps) => {
  const styles = useStyles();

  return (
    <div
      className={clsx(styles.container, padding && styles.padding)}
      style={style}
    >
      <CircularProgress title={title} />
      <Typography variant="overline">{title}</Typography>
    </div>
  );
};
