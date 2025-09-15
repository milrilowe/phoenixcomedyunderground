import { orders } from "@/lib/square"
import { createServerFn } from "@tanstack/react-start"
import { randomUUID } from "crypto"

interface CreateOrderData {
	itemId: string
	quantity: number
	locationId: string
}

export const createOrder = createServerFn()
	.validator((data: unknown): CreateOrderData => {
		if (typeof data !== 'object' || data === null) {
			throw new Error('Data must be an object.')
		}

		const obj = data as Record<string, unknown>

		if (!('itemId' in obj) || typeof obj.itemId !== 'string') {
			throw new Error('itemId must be a string')
		}

		if (!('quantity' in obj) || typeof obj.quantity !== 'number') {
			throw new Error('quantity must be a number')
		}

		if (!('locationId' in obj) || typeof obj.locationId !== 'string') {
			throw new Error('locationId must be a string')
		}

		return {
			itemId: obj.itemId,
			quantity: obj.quantity,
			locationId: obj.locationId
		}
	})
	.handler(async ({ context, data }) => {
		const result = await orders.create({
			idempotencyKey: randomUUID(),
			order: {
				locationId: data.locationId,
				lineItems: [{
					catalogObjectId: data.itemId,
					quantity: data.quantity.toString()
				}]
			}
		})

		if (result.errors) {
			throw new Error(`Order creation failed: ${JSON.stringify(result.errors)}`)
		}

		return result.order
	})