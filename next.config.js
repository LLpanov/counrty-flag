/** @type {import('next').NextConfig} */
const nextConfig = {
	pageDataCollectionTimeout: 120000,
	reactStrictMode: true,
	env: {
		API_URL: process.env.API_URL
	},
	images: {
		domains: ['localhost', 'flagcdn.com', 'upload.wikimedia.org', 'mainfacts.com']
	}
}

module.exports = nextConfig
