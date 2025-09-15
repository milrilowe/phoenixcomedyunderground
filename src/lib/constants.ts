function requireEnv(name: string): string {
	const value = import.meta.env[name];

	if (!value) {
		throw new Error(`Missing required environment variable: ${name}`);
	}

	return value;
}

export const SQUARE_ACCESS_TOKEN = requireEnv("VITE_SQUARE_ACCESS_TOKEN");
export const SQUARE_APP_ID = requireEnv("VITE_SQUARE_APP_ID");
export const NODE_ENV = import.meta.env.NODE_ENV;