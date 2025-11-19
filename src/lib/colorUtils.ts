/**
 * Darkens a hex color by a specified amount
 * @param hex - Two-character hex string (00-FF)
 * @param amount - Amount to darken (0-255, default 8)
 * @returns Darkened hex string
 */
export function darkenHex(hex: string, amount: number = 8): string {
  const num = parseInt(hex, 16);
  const result = Math.max(0, num - amount);
  return result.toString(16).padStart(2, '0');
}

/**
 * Lightens a hex color by a specified amount
 * @param hex - Two-character hex string (00-FF)
 * @param amount - Amount to lighten (0-255, default 8)
 * @returns Lightened hex string
 */
export function lightenHex(hex: string, amount: number = 8): string {
  const num = parseInt(hex, 16);
  const result = Math.min(255, num + amount);
  return result.toString(16).padStart(2, '0');
}
