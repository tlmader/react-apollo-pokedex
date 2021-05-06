import { Popover } from '@material-ui/core';
import { useState } from 'react';
import { SpeciesFilter } from '../SpeciesFilter';
import { TypeFilter } from '../TypeFilter';
import { usePopoverStyles } from './usePopoverStyles';

export const useHeaderFilterMenu = () => {
  const styles = usePopoverStyles();

  const [
    filterMenuAnchorEl,
    setFilterMenuAnchorEl,
  ] = useState<null | HTMLElement>(null);
  const isFilterMenuOpen = Boolean(filterMenuAnchorEl);

  const handleFilterMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setFilterMenuAnchorEl(event.currentTarget);
  };

  const handleFilterMenuClose = () => {
    setFilterMenuAnchorEl(null);
  };

  const filterMenuId = 'filter-menu';
  const renderFilterMenu = (
    <Popover
      PaperProps={{
        className: styles.popover,
      }}
      id={filterMenuId}
      open={isFilterMenuOpen}
      anchorEl={filterMenuAnchorEl}
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
      <TypeFilter />
      <SpeciesFilter />
    </Popover>
  );

  return {
    handleFilterMenuOpen,
    filterMenuId,
    renderFilterMenu,
  };
};
