import { useState, useCallback } from 'react';
import { getCookieValue, setCookie } from '../lib/cookieUtils';

export function useCookieState<T>(key: string, defaultValue: T, days = 365): [T, (value: T) => void] {
  const [value, setValue] = useState<T>(() => {
    const saved = getCookieValue(key);
    if (saved) {
      try {
        return JSON.parse(saved) as T;
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
