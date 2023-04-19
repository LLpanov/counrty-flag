import { urls } from '@/config/urls'
import { kyService } from '@/services/ky.service'
import { ICountry, IFindCountry } from '@/interfaces/country.interface'

export const countryService = {
	getAll: async (): Promise<ICountry[]> => {
		try {
			const countries: ICountry[] = await kyService.get(urls.all).json()
			return countries.map((country: any) => ({
				status: country.status,
				name: {
					common: country.name.common,
					official: country.name.official
				},
				capital: country.capital || null,
				region: country.region,
				population: country.population,
				languages: country.languages || null,
				flags: {
					png: country.flags.png,
					alt: country.flags.alt || null
				},
				currencies: country.currencies || null
			}))
		} catch (error: any) {
			console.error('Error while fetching data:', error)
			return []
		}
	},

	getByName: async (name: string): Promise<ICountry> => {
		const response: IFindCountry[] = await kyService.get(urls.name(name)).json()
		return response[0]
	}
}
