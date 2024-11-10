import type { NextConfig } from "next"

const nextConfig: NextConfig = {
	experimental: {
		turbo: {
			rules: {
				"*.scss": {
					loaders: ["sass-loader"],
					as: "*.css"
				}
			}
		}
	},
	sassOptions: {
		silenceDeprecations: ["legacy-js-api"]
	}
}

export default nextConfig
