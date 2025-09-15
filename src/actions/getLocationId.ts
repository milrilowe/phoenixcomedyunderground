import { createServerFn } from '@tanstack/react-start'
import { locations } from '@/lib/square'

export const getLocationId = createServerFn().handler(async () => {
	const result = await locations.list();

	// if (result.errors) throw new Error(`Trouble fetching locations: ${JSON.stringify(result.errors)}`)

	// if (!result.locations || result.locations.length === 0) throw new Error(`Problem with locations: There are no locations.`)

	return result.locations?.[0]?.id ? result.locations[0].id : undefined
})