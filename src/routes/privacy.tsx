import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/privacy')({
	component: RouteComponent,
})

function RouteComponent() {
	return (
		<div className="bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-100 min-h-screen">
			<div className="max-w-4xl mx-auto px-4 py-8">
				{/* Header */}
				<header className="text-center mb-8">
					<Link
						to="/"
						className="inline-block mb-4 text-zinc-600 hover:text-zinc-800 transition-colors"
					>
						← Back to Phoenix Comedy Underground
					</Link>
					<h1 className="text-4xl font-black text-zinc-900 mb-2">
						Privacy Policy
					</h1>
					<p className="text-zinc-600">Last updated: May 31, 2025</p>
				</header>

				{/* Content */}
				<main className="flex flex-col cols-1 bg-white/80 rounded-lg p-8 shadow-lg prose prose-zinc max-w-none gap-3">
					<div className="gap-1">
						<h2 className="text-xl font-bold">What We Collect</h2>
						<div className="space-y-2">
							<p>
								<strong>Email Addresses</strong>: When you sign up for our mailing list, we collect your email to send you updates about upcoming shows.
							</p>

							<p>
								<strong>Website Analytics</strong>: We use Google Analytics to understand how people use our website (like which pages are popular and how people find us). This helps us improve the show experience.
							</p>

							<p>
								<strong>QR Code Source</strong>: If you visit from a QR code, we remember where you came from to understand which promotional materials work best.
							</p>
						</div>
					</div>

					<div className="space-y-4">
						<div>
							<h2 className="text-xl font-bold">How We Use Your Information</h2>
							<ul className="list-disc pl-10">
								<li>
									<strong>Email</strong>: Send you comedy show updates, new event announcements, and occasional behind-the-scenes content
								</li>
								<li>
									<strong>Analytics</strong>: Improve our website and understand our audience better
								</li>
								<li>
									<strong>QR Tracking</strong>: See which promotional efforts are most effective
								</li>
							</ul>
						</div>

						<div>
							<h2 className="font-bold">We Don&apos;t</h2>
							<ul className="list-disc pl-10">
								<li>Sell your information to anyone</li>
								<li>Send spam or excessive emails</li>
								<li>Share your data with third parties (except Google Analytics)</li>
								<li>Store payment information (ticket sales handled by Eventbrite)</li>
							</ul>
						</div>
					</div>

					<div>
						<h2 className="text-xl font-bold">Your Rights</h2>
						<ul className="space-y-2">
							<li>
								<strong>Unsubscribe anytime</strong> from emails (link in every email)
							</li>
							<li>
								<strong>Opt out of analytics</strong> by enabling &quot;Do Not Track&quot; in your browser
							</li>
							<li>
								<strong>Contact us</strong> to delete your information:{' '}
								<a href="mailto:contact@phoenixcomedyunderground.com">
									contact@phoenixcomedyunderground.com
								</a>
							</li>
						</ul>
					</div>

					<div>
						<h2 className="text-xl font-bold">Cookies & Local Storage</h2>
						<p>We use minimal browser storage to:</p>
						<ul>
							<li>Remember if you came from a QR code</li>
							<li>Google Analytics functionality (you can disable this in your browser)</li>
						</ul>
					</div>

					<div>
						<h2 className="text-xl font-bold">Contact</h2>
						<p>
							Questions about privacy? Email us:{' '}
							<a href="mailto:contact@phoenixcomedyunderground.com">
								contact@phoenixcomedyunderground.com
							</a>
						</p>

						<hr className="my-8" />

						<p className="text-center text-zinc-600 italic">
							Phoenix Comedy Underground is committed to protecting your privacy while delivering the best underground comedy experience in Phoenix.
						</p>
					</div>
				</main>

				{/* Footer */}
				<footer className="text-center mt-8">
					<Link
						to="/"
						className="bg-zinc-900 text-yellow-400 hover:bg-zinc-800 font-bold px-6 py-3 rounded-none border-4 border-zinc-900 hover:border-zinc-700 transition-all uppercase tracking-wide inline-block"
					>
						Back to Show Info
					</Link>
				</footer>
			</div>
		</div>
	)
}
