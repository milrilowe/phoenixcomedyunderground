import { catalog } from "@/lib/square"
import { createServerFn } from "@tanstack/react-start"

export const getItemId = createServerFn().handler(async () => {
	const result = await catalog.list({
		types: "ITEM",
	})

	return result.data[0].id;
})