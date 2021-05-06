import { createStyles, makeStyles, Theme } from '@material-ui/core';

export const usePopoverStyles = makeStyles((theme: Theme) =>
  createStyles({
    popover: {
      padding: theme.spacing(1),
      width: 300,
    },
  }),
);
