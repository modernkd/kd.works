/**
 * Color manipulation utilities for creating visual effects
 */

/**
 * Darkens a hex color by a specified amount
 * @param hex - Hex color string (without #)
 * @param amount - Amount to darken (default: 32)
 * @returns Darkened hex color string
 */
export const darkenHex = (hex: string, amount: number = 32): string => {
  const num = Math.max(0, parseInt(hex, 16) - amount);
  return num.toString(16).padStart(2, '0');
};

/**
 * Lightens a hex color by a specified amount
 * @param hex - Hex color string (without #)
 * @param amount - Amount to lighten (default: 51)
 * @returns Lightened hex color string
 */
export const lightenHex = (hex: string, amount: number = 51): string => {
  const num = Math.min(255, parseInt(hex, 16) + amount);
  return num.toString(16).padStart(2, '0');
};

/**
 * Creates shadow color variations for 3D magnet effects
 * @param color - Hex color string (with or without #)
 * @returns Object containing different shadow color variations
 */
export const createMagnetShadows = (color: string) => {
  const hex = color.replace('#', '');
  const r = hex.slice(0, 2);
  const g = hex.slice(2, 4);
  const b = hex.slice(4, 6);

  return {
    shadowDark: `#${darkenHex(r)}${darkenHex(g)}${darkenHex(b)}`,
    shadowLight: `#${lightenHex(r)}${lightenHex(g)}${lightenHex(b)}`,
    shadowDarker: `#${darkenHex(r, 16)}${darkenHex(g, 16)}${darkenHex(b, 16)}`,
    shadowDarkest: `#${darkenHex(r, 64)}${darkenHex(g, 64)}${darkenHex(b, 64)}`,
  };
};
