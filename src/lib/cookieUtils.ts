/**
 * Retrieves the value of a cookie by name
 * @param name - The name of the cookie to retrieve
 * @returns The cookie value as a string, or null if not found
 */
export function getCookieValue(name: string): string | null {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(';').shift() || null;
  return null;
}

/**
 * Sets a cookie with the specified name, value, and expiration
 * @param name - The name of the cookie
 * @param value - The value to store in the cookie
 * @param days - Number of days until the cookie expires (default: 365)
 * @param path - The path for which the cookie is valid (default: '/')
 */
export function setCookie(name: string, value: string, days: number = 365, path: string = '/'): void {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value}; expires=${expires.toUTCString()}; path=${path}`;
}
