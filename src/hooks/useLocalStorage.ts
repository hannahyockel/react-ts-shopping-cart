
import { useEffect, useState } from "react";

// works with generics, whatever <T> is, and the different prop values, initialValue is either type of T or a function that returns type of T

// type of T in this case is array of cart items <CartItem[]>
export function useLocalStorage<T>(key: string, initialValue: T | (() => T)) {
  // only invoke checking local storage once, not every time component renders, because it's a slow process
  // gets value from local storage or just gets initialValue
  const [value, setValue] = useState<T>(() => {
    const jsonValue = localStorage.getItem(key);
    if (jsonValue != null) return JSON.parse(jsonValue)

    if (typeof initialValue === "function") {
        return (initialValue as () => T)
    } else {
        return initialValue
    }
  })

  // store value in local storage
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue] as [typeof value, typeof setValue]
}