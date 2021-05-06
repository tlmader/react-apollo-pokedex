import { Popover } from '@material-ui/core';
import { useState } from 'react';
import { SortRadioGroup } from '../SortRadioGroup';
import { usePopoverStyles } from './usePopoverStyles';

export const useHeaderSortMenu = () => {
  const styles = usePopoverStyles();

  const [sortMenuAnchorEl, setSortMenuAnchorEl] = useState<null | HTMLElement>(
    null,
  );
  const isSortMenuOpen = Boolean(sortMenuAnchorEl);

  const handleSortMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setSortMenuAnchorEl(event.currentTarget);
  };

  const handleFilterMenuClose = () => {
    setSortMenuAnchorEl(null);
  };

  const sortMenuId = 'sort-menu';
  const renderSortMenu = (
    <Popover
      PaperProps={{
        className: styles.popover,
      }}
      id={sortMenuId}
      open={isSortMenuOpen}
      anchorEl={sortMenuAnchorEl}
      onClose={handleFilterMenuClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
    >
      <SortRadioGroup />
    </Popover>
  );

  return {
    handleSortMenuOpen,
    sortMenuId,
    renderSortMenu,
  };
};
