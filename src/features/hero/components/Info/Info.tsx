import { BuyTickets, Details, Instagram } from "./components";

export function Info() {
	return (
		<header className="space-y-8 order-1 lg:order-2 text-center lg:text-left">
			<div className="space-y-4">
				<h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-zinc-900 leading-none tracking-tight">
					As above,
					<br />
					<span className="text-4xl md:text-5xl lg:text-6xl text-zinc-700">
						So below
					</span>
				</h1>
				<div
					className="w-24 h-1 bg-zinc-800 mx-auto lg:mx-0"
					aria-hidden="true"
				/>
				<p className="text-xl md:text-2xl text-zinc-700 font-medium uppercase tracking-wider">
					Phoenix Comedy Underground
				</p>
			</div>

			<div className="space-y-6">
				<div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
					<BuyTickets />
					<Instagram />
				</div>

				{/* Event Details */}
				<Details />
			</div>
		</header>
	)
}