import { useState, useEffect } from 'react'
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { useSquareItem } from '@/hooks/useSquareItem'
import { useSquarePayments } from '@/hooks/useSquarePayments'
import { CheckoutService } from '@/services/checkout'
import { CheckoutForm } from './components'
import { CheckoutFormData } from '@/lib/validations'
import { getLocationId } from '@/actions/getLocationId'
import { getItemId } from '@/actions/getItemId'

interface CheckoutDialogProps {
	locationId?: string
	itemId?: string
}

export function CheckoutDialog({ locationId, itemId }: CheckoutDialogProps) {
	const [isOpen, setIsOpen] = useState(false)
	const [isProcessing, setIsProcessing] = useState(false)
	const [actualLocationId, setActualLocationId] = useState<string | null>(null)
	const [actualItemId, setActualItemId] = useState<string | null>(null)

	const { squareItem, isLoading: isLoadingItem, fetchItem } = useSquareItem()
	const { initializePayments, tokenizePayment, initError } = useSquarePayments(actualLocationId || '')

	// Get location and item IDs when dialog opens
	useEffect(() => {
		if (isOpen) {
			const loadIds = async () => {
				try {
					// Use provided IDs or fetch from server functions
					const locId = locationId || await getLocationId()
					const itmId = itemId || await getItemId()

					setActualLocationId(locId || null)
					setActualItemId(itmId || null)

					if (itmId) {
						await fetchItem(itmId)
					}
					if (locId) {
						await initializePayments()
					}
				} catch (error) {
					console.error('Failed to load IDs:', error)
				}
			}

			loadIds()
		}
	}, [isOpen, locationId, itemId, fetchItem, initializePayments])

	const handleSubmit = async (formData: CheckoutFormData) => {
		if (!squareItem || !actualLocationId || !actualItemId) return

		setIsProcessing(true)

		try {
			const paymentToken = await tokenizePayment()

			const result = await CheckoutService.processPayment({
				...formData,
				paymentToken,
				itemId: actualItemId,
				locationId: actualLocationId,
				totalAmount: squareItem.price * formData.quantity
			})

			// Success!
			alert(`Purchase successful! Order ID: ${result.orderId}`)
			setIsOpen(false)

		} catch (error) {
			console.error('Purchase failed:', error)
			alert(`Purchase failed: ${error.message}`)
		} finally {
			setIsProcessing(false)
		}
	}

	return (
		<AlertDialog open={isOpen} onOpenChange={setIsOpen}>
			<AlertDialogTrigger asChild>
				<Button
					size="lg"
					className="bg-zinc-900 text-yellow-400 hover:bg-zinc-800 font-bold text-xl px-12 py-6 border-4 border-zinc-900 hover:border-zinc-700 shadow-lg transform hover:scale-105 transition-all duration-200 uppercase tracking-wide"
				>
					Get Tickets
				</Button>
			</AlertDialogTrigger>

			<AlertDialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
				<AlertDialogHeader>
					<AlertDialogTitle>
						{squareItem?.name || 'Best of Phoenix - Sept 24, 2025'}
					</AlertDialogTitle>
					<AlertDialogDescription>
						Standup Comedy at Cornish Pasty Co. Downtown
						{squareItem && (
							<div className="mt-2">
								<strong className="text-lg">${squareItem.price}</strong> per ticket
							</div>
						)}
					</AlertDialogDescription>
				</AlertDialogHeader>

				{isLoadingItem ? (
					<div className="space-y-4 animate-pulse">
						<div className="h-4 bg-gray-200 rounded" />
						<div className="h-4 bg-gray-200 rounded w-3/4" />
					</div>
				) : squareItem ? (
					<CheckoutForm
						item={squareItem}
						onSubmit={handleSubmit}
						isSubmitting={isProcessing}
					/>
				) : (
					<div className="text-center py-4 text-muted-foreground">
						Failed to load ticket information
					</div>
				)}

				{initError && (
					<div className="text-sm text-destructive bg-destructive/10 p-3 rounded">
						{initError}
					</div>
				)}

				<AlertDialogFooter>
					<AlertDialogCancel disabled={isProcessing}>
						Cancel
					</AlertDialogCancel>
					<AlertDialogAction
						form="checkout-form"
						type="submit"
						disabled={!squareItem || isProcessing || isLoadingItem || !!initError}
						className="bg-zinc-900 hover:bg-zinc-800"
					>
						{isProcessing ? 'Processing...' : 'Complete Purchase'}
					</AlertDialogAction>
				</AlertDialogFooter>
			</AlertDialogContent>
		</AlertDialog>
	)
}