import { useState, useCallback } from 'react'

interface SquareItem {
  id: string
  name: string
  price: number
  quantityAvailable: number
}

export function useSquareItem() {
  const [squareItem, setSquareItem] = useState<SquareItem | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchItem = useCallback(async (itemId: string) => {
    setIsLoading(true)
    setError(null)
    
    try {
      // TODO: Replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 500))
      setSquareItem({
        id: itemId,
        name: "Best of Phoenix Comedy Ticket",
        price: 25.00,
        quantityAvailable: 47
      })
    } catch (err) {
      setError('Failed to load item details')
      console.error('Error fetching item:', err)
    } finally {
      setIsLoading(false)
    }
  }, [])

  return {
    squareItem,
    isLoading,
    error,
    fetchItem
  }
}