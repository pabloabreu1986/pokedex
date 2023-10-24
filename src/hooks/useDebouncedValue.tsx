import { useEffect, useState } from 'react'

export const useDebouncedValue = (input: string = '', time: number = 500) => {
    const [debouncedValue, stDebouncedValue] = useState(input)

    useEffect(() => {
        const timeout = setTimeout(() => {
            stDebouncedValue(input)
        }, time)

        return () => {
            clearTimeout(timeout)
        }
    }, [input])

    return debouncedValue
}
