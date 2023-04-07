const baseUrl = process.env.API_URL

const urls = {
	all: 'all',
	region: 'region',
	language: 'lang',
	name: (name: string) => `name/${name}`,
	currency: 'currency'
}

export { baseUrl, urls }
