import { SquareClient, SquareEnvironment } from 'square'
import { NODE_ENV, SQUARE_ACCESS_TOKEN } from '@/lib/constants';

export const squareClient = new SquareClient({
	token: SQUARE_ACCESS_TOKEN,
	environment: NODE_ENV === 'production'
		? SquareEnvironment.Production
		: SquareEnvironment.Sandbox
})

export const { payments, orders, refunds, customers, checkout, locations, catalog } = squareClient