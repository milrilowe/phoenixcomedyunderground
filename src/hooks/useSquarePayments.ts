import { useRef, useCallback, useState } from 'react'
import { SQUARE_APP_ID } from '@/lib/constants'

export function useSquarePayments(locationId: string) {
  const cardInstanceRef = useRef(null)
  const [isInitialized, setIsInitialized] = useState(false)
  const [initError, setInitError] = useState<string | null>(null)

  const loadSquareSDK = useCallback((): Promise<any> => {
    return new Promise((resolve, reject) => {
      if (window.Square) {
        resolve(window.Square)
        return
      }

      const script = document.createElement('script')
      script.src = 'https://sandbox.web.squarecdn.com/v1/square.js'
      script.onload = () => resolve(window.Square)
      script.onerror = () => reject(new Error('Failed to load Square SDK'))
      document.head.appendChild(script)
    })
  }, [])

  const initializePayments = useCallback(async () => {
    try {
      setInitError(null)
      await loadSquareSDK()
      
      if (!window.Square) {
        throw new Error('Square SDK not available')
      }

      const payments = window.Square.payments(SQUARE_APP_ID, locationId)
      const card = await payments.card()

      await card.attach('#card-container')
      cardInstanceRef.current = card
      setIsInitialized(true)

      console.log('Square payments initialized')
    } catch (error) {
      const message = 'Payment system failed to initialize'
      setInitError(message)
      console.error('Square init error:', error)
      throw new Error(message)
    }
  }, [locationId, loadSquareSDK])

  const tokenizePayment = useCallback(async (): Promise<string> => {
    if (!cardInstanceRef.current) {
      throw new Error('Payment form not ready')
    }

    const result = await cardInstanceRef.current.tokenize()
    
    if (result.status === 'OK') {
      return result.token
    }
    
    const errorMessage = result.errors?.[0]?.detail || 'Payment tokenization failed'
    throw new Error(errorMessage)
  }, [])

  return {
    initializePayments,
    tokenizePayment,
    isInitialized,
    initError
  }
}