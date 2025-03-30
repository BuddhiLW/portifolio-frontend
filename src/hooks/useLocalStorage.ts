"use client"
import { useEffect, useState } from "react"

export default function useLocalStorage<T>(key: string, initialValue: T) {
	const [value, setValue] = useState<T>(() => {
		if (typeof window === 'undefined') return initialValue
		const item = localStorage.getItem(key)
		return item ? JSON.parse(item) : initialValue
	})

	// A custom setter that updates both state and localStorage
	const setStorageValue = (newValue: T | ((val: T) => T)) => {
		// If functional update, apply it to current value
		const valueToStore = newValue instanceof Function ? newValue(value) : newValue
		
		// Save state
		setValue(valueToStore)
		
		// Save to localStorage
		if (typeof window !== 'undefined') {
			if (valueToStore === null || (Array.isArray(valueToStore) && valueToStore.length === 0)) {
				localStorage.removeItem(key)
			} else {
				localStorage.setItem(key, JSON.stringify(valueToStore))
			}
		}
	}

	// Still sync with localStorage for updates from other sources
	useEffect(() => {
		if (typeof window !== 'undefined') {
			localStorage.setItem(key, JSON.stringify(value))
		}
	}, [key, value])

	return [value, setStorageValue] as const
}
