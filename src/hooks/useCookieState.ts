import { useState, useCallback } from 'react';
import { getCookieValue, setCookie } from '../lib/cookieUtils';

/**
 * Custom hook to manage state synchronized with cookies.
 * @template T - The type of the state value.
 * @param {string} key - The cookie key to store the value under.
 * @param {T} defaultValue - The default value if no cookie is found or parsing fails.
 * @param {number} [days=365] - Number of days until the cookie expires.
 * @returns {[T, (value: T) => void]} A tuple containing the current value and a setter function that updates both state and cookie.
 */
export function useCookieState<T>(key: string, defaultValue: T, days = 365): [T, (value: T) => void] {
  const [value, setValue] = useState<T>(() => {
    const savedCookieValue = getCookieValue(key);
    if (savedCookieValue) {
      try {
        return JSON.parse(savedCookieValue) as T;
      } catch {
        return defaultValue;
      }
    }
    return defaultValue;
  });

  const setValueAndSave = useCallback(
    (newValue: T) => {
      setValue(newValue);
      setCookie(key, JSON.stringify(newValue), days, '/');
    },
    [key, days]
  );

  return [value, setValueAndSave];
}
