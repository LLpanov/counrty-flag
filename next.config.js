/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	env: {
		API_URL: process.env.API_URL
	},
	images: {
		domains: ['localhost', 'flagcdn.com', 'upload.wikimedia.org']
	}
}

module.exports = nextConfig
