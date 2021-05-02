import { decode, encode } from 'base64-url';

/**
 * Converts the given number to a cursor.
 * This is used to encode the information needed for PokeAPI's offset in each cursor.
 */
export const toCursor = (value: number): string => {
  return encode(value.toString());
};

/**
 * Extract a number from the given cursor.
 */
export function fromCursor(cursor: string): number {
  const value = Number(decode(cursor));
  if (value) {
    return value;
  } else {
    // Not sure if this is a bad idea
    return 0;
  }
}
