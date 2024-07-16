import { useEffect, useState } from "react"

export const useDebounce = <T>(value: T, delay = 1200) => {
  const [debouncedValue, setdeboucedValue] = useState<T>(value)
  useEffect(() => {
    const timeout = setTimeout(() => {
      setdeboucedValue(value);
    }, delay)
    return () => clearTimeout(timeout);
  }, [value, delay])
  return debouncedValue;
}
