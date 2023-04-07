import { urls } from '@/config/urls'
import { kyService } from '@/services/ky.service'
import { DataCountries, DataSingleCountry } from '@/interfaces/country.interface'

export const countryService = {
	getAll: (): Promise<DataCountries> => kyService.get(urls.all).json(),
	getByName: (name: string): Promise<DataSingleCountry> => kyService.get(urls.name(name)).json(),
	getByRegion: (region: string): Promise<DataCountries> => kyService.get(urls.region + `/${region}`).json(),
	getByLang: (lang: string): Promise<DataCountries | DataSingleCountry> => kyService.get(urls.language + `/${lang}`).json(),
	getByCurrency: (currency: string): Promise<DataCountries | DataSingleCountry> => kyService.get(urls.currency + `/${currency}`).json()
}
