import { useEffect, useState } from 'react';

// A custom hook for interacting with sessionStorage
function useSessionStorage<T>(key: string, initialValue: T) {
  // Retrieve the initial value from sessionStorage or use the provided initial value
  const [storedValue, setStoredValue] = useState<T>(() => {
    const item = sessionStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });

  // Update sessionStorage when the stored value changes
  useEffect(() => {
    sessionStorage.setItem(key, JSON.stringify(storedValue));
  }, [key, storedValue]);

  return [storedValue, setStoredValue] as const;
}

export default useSessionStorage;
