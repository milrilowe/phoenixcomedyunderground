import { EmailForm } from "./components";
import { Link } from "@tanstack/react-router";

export function Footer() {
	return (
		<footer className="border-t-4 border-zinc-900 bg-zinc-900 text-yellow-400 py-4">
			<div className="max-w-4xl mx-auto px-4">
				<div className="flex flex-col cols-1 gap-2 text-center space-y-3">
					<EmailForm className="max-w-md mx-auto" />
					<div className="flex flex-col sm:flex-row justify-center items-center text-xs space-y-1 sm:space-y-0 sm:space-x-4">
						<a
							href="mailto:contact@phoenixcomedyunderground.com"
							className="text-yellow-400/80 hover:text-yellow-300 underline"
						>
							contact@phoenixcomedyunderground.com
						</a>
						<span className="hidden sm:inline text-yellow-400/60">•</span>
						<Link
							to="/privacy"
							className="text-yellow-400/80 hover:text-yellow-300 underline"
						>
							Privacy Policy
						</Link>
					</div>
				</div>
			</div>
		</footer>
	)
}