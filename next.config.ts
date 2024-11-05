import type { NextConfig } from "next"

const nextConfig: NextConfig = {
	async rewrites() {
		return [
			{
				source: "/(.*)",
				destination:
					"https://n1ibzhgix2.execute-api.ap-northeast-1.amazonaws.com"
			}
		]
	}
}

export default nextConfig
