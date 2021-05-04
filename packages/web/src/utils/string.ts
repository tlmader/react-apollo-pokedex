import upperFirst from 'lodash/upperFirst';

/**
 * Formats "example-name" to "Example Name"
 */
export const formatName = (name: string): string =>
  name.split('-').map(upperFirst).join(' ');
