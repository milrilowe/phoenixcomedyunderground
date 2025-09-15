import { Flyer, Footer, Info } from "./components";

export function Hero() {

	return (
		<section
			className="hidden lg:block h-screen relative bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-100 overflow-hidden"
			aria-label="Phoenix Comedy Underground showcase desktop layout"
		>
			<div className="relative z-10 flex flex-col h-full">
				{/* Hero section */}
				<section className="flex-1 flex items-center justify-center px-4 pt-8 pb-4">
					<div className="max-w-7xl w-full grid lg:grid-cols-2 gap-16 items-center">
						<Flyer />

						<Info />
					</div>
				</section>

				<Footer />
			</div >
		</section >
	)
}