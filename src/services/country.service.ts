import { urls } from '@/config/urls'
import { kyService } from '@/services/ky.service'
import { DataAllCountries, DataSingleCountry, ICountry } from '@/interfaces/country.interface'

export const countryService = {
	getAll: (): Promise<ICountry[]> =>
		kyService
			.get(urls.all)
			.json<ICountry[]>()
			.then((countries: ICountry[]) =>
				countries.map((country: any) => ({
					independent: country.independent || null,
					status: country.status,
					name: {
						common: country.name.common,
						official: country.name.official
					},
					capital: country.capital || null,
					timezone: country.timezone || null,
					region: country.region,
					subregion: country.subregion || null,
					landlocked: country.landlocked,
					population: country.population,
					startOfWeek: country.startOfWeek,
					maps: {
						openStreetMaps: country.maps.openStreetMaps
					},
					car: {
						side: country.car.side
					},
					languages: country.languages || null,
					flags: {
						png: country.flags.png,
						alt: country.flags.alt || null
					},
					coatOfArms: country.coatOfArms,
					currencies: country.currencies || null
				}))
			),
	getByName: async (name: string): Promise<ICountry> => {
		const response: ICountry[] = await kyService.get(urls.name(name)).json()
		return response[0]
	},
	getByRegion: (region: string): Promise<DataAllCountries> => kyService.get(urls.region + `/${region}`).json(),
	getByLang: (lang: string): Promise<DataAllCountries | DataSingleCountry> => kyService.get(urls.language + `/${lang}`).json(),
	getByCurrency: (currency: string): Promise<DataAllCountries | DataSingleCountry> => kyService.get(urls.currency + `/${currency}`).json()
}
