import { CheckoutDialog, FallbackTicketButton } from "./components";
import { Route } from '@/routes/__root'

export function BuyTickets() {
	const { locationId, itemId } = Route.useLoaderData()

	return (locationId && itemId) ?
		<CheckoutDialog locationId={locationId} itemId={itemId} /> :
		<FallbackTicketButton />;
}