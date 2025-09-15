/// <reference types="vite/client" />
import type { ReactNode } from 'react'
import {
	Outlet,
	createRootRoute,
	HeadContent,
	Scripts,
} from '@tanstack/react-router'
import { getLocationId } from '@/actions/getLocationId'

import appCss from "@/styles/app.css?url"
import { getItemId } from '@/actions/getItemId'

export const Route = createRootRoute({
	loader: async () => {
		const locationId = await getLocationId();
		const itemId = await getItemId();

		return { locationId, itemId }
	},
	head: () => ({
		meta: [
			{
				charSet: 'utf-8',
			},
			{
				name: 'viewport',
				content: 'width=device-width, initial-scale=1',
			},
			{
				title: 'Phoenix Comedy Underground',
			},
		],
		links: [
			{
				rel: "stylesheet",
				href: appCss,
			},
		],
	}),
	component: RootComponent,
})

function RootComponent() {
	return (
		<RootDocument>
			<Outlet />
		</RootDocument>
	)
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
	return (
		<html>
			<head>
				<HeadContent />
			</head>
			<body>
				{children}
				<Scripts />
			</body>
		</html>
	)
}