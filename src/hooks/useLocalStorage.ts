"use client"
import { useCallback, useEffect, useState } from "react"

/**
 * A custom React hook for managing localStorage with SSR safety, type safety,
 * and efficient state management.
 * 
 * @param key The localStorage key to use
 * @param initialValue The initial value to use if no value exists in localStorage
 * @returns A tuple containing the current value and methods to manipulate it
 */
export default function useLocalStorage<T>(key: string, initialValue: T) {
  // Initialize state with SSR safety check
  const [value, setInternalValue] = useState<T>(() => {
    if (typeof window === 'undefined') return initialValue
    try {
      const item = localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error)
      return initialValue
    }
  })

  // Set value in localStorage and state
  const setValue = useCallback((newValue: T | ((val: T) => T)) => {
    try {
      // If functional update, apply it to current value
      const valueToStore = newValue instanceof Function ? newValue(value) : newValue
      
      // Save state
      setInternalValue(valueToStore)
      
      // Save to localStorage with empty array check
      if (typeof window !== 'undefined') {
        if (valueToStore === null || (Array.isArray(valueToStore) && valueToStore.length === 0)) {
          localStorage.removeItem(key)
        } else {
          localStorage.setItem(key, JSON.stringify(valueToStore))
        }
      }
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error)
    }
  }, [key, value])

  // Remove item from localStorage
  const removeItem = useCallback(() => {
    try {
      if (typeof window !== 'undefined') {
        localStorage.removeItem(key)
        setInternalValue(initialValue)
      }
    } catch (error) {
      console.error(`Error removing localStorage key "${key}":`, error)
    }
  }, [key, initialValue])

  // Get current value directly from localStorage (useful for getting fresh values)
  const getItem = useCallback(() => {
    try {
      if (typeof window === 'undefined') return initialValue
      const item = localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.error(`Error getting localStorage key "${key}":`, error)
      return initialValue
    }
  }, [key, initialValue])

  // Clear all localStorage items (use with caution)
  const clearAll = useCallback(() => {
    try {
      if (typeof window !== 'undefined') {
        localStorage.clear()
        setInternalValue(initialValue)
      }
    } catch (error) {
      console.error("Error clearing localStorage:", error)
    }
  }, [initialValue])

  // Handle storage events (for multi-tab synchronization)
  useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === key && event.newValue !== JSON.stringify(value)) {
        setInternalValue(event.newValue ? JSON.parse(event.newValue) : initialValue)
      }
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('storage', handleStorageChange)
      return () => window.removeEventListener('storage', handleStorageChange)
    }
  }, [key, value, initialValue])

  return {
    value,
    setValue,
    removeItem,
    getItem,
    clearAll,
    // For component remounting pattern
    getKey: () => key,
  } as const
}

// Helper hook for component remounting when localStorage changes
export function useRemountOnStorageChange(key: string) {
  const [remountKey, setRemountKey] = useState(0)
  
  const forceRemount = useCallback(() => {
    setRemountKey(prev => prev + 1)
  }, [])

  // Listen for storage events
  useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === key) {
        forceRemount()
      }
    }
    
    if (typeof window !== 'undefined') {
      window.addEventListener('storage', handleStorageChange)
      return () => window.removeEventListener('storage', handleStorageChange)
    }
  }, [key, forceRemount])

  return { remountKey, forceRemount }
}