export function Flyer() {

	return (
		<aside className="flex justify-center lg:justify-end order-2 lg:order-1">
			<div className="relative">
				<div
					className="absolute inset-0 translate-x-3 translate-y-3 bg-black/20 rounded-lg blur-sm"
					aria-hidden="true"
				/>
				<figure className="relative transform -rotate-1 hover:rotate-0 transition-transform duration-500">
					<img
						src="/flyer.png"
						alt="Phoenix Comedy Underground Best of Phoenix Showcase flyer - June 25, 2025 at Cornish Pasty Co. Doors 7:30 PM, Show 8:00 PM. 21+ event featuring underground comedy talent"
						className="max-w-full h-auto max-h-[75vh] object-contain rounded-lg shadow-xl"
						width={400}
						height={600}
					/>
				</figure>
				<div
					className="absolute -top-2 left-12 w-12 h-6 bg-yellow-200/60 rotate-12 rounded-sm shadow-md border border-yellow-300/40"
					aria-hidden="true"
				/>
				<div
					className="absolute -bottom-2 right-16 w-12 h-6 bg-yellow-200/60 -rotate-6 rounded-sm shadow-md border border-yellow-300/40"
					aria-hidden="true"
				/>
			</div>
		</aside>
	)
}