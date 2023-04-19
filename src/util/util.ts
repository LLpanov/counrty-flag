import { ICountry } from '@/interfaces/country.interface'

export const getTitle = (title: string) => `${title} | CountryFlag`

export const getPageOfCountries = (countries: ICountry[], currentPage: number = 1, pageSize: number = 12): ICountry[] => {
	const startIndex = (currentPage - 1) * pageSize
	const endIndex = startIndex + pageSize
	return countries.slice(startIndex, endIndex)
}

export const getTotalPages = (countries: ICountry[], pageSize: number): number => {
	return Math.ceil(countries.length / pageSize)
}

export const filterCountries = (countries: ICountry[], searchTerm: string, region: string, language: string, currency: string) => {
	let filtered = countries
	if (searchTerm) {
		filtered = filtered.filter(country => country.name.common.toLowerCase().includes(searchTerm.toLowerCase()))
	}
	if (region) {
		filtered = filtered.filter(country => country.region === region)
	}
	if (language) {
		filtered = filtered.filter(country => country.languages && Object.values(country.languages).includes(language))
	}
	if (currency) {
		filtered = filtered.filter(country => {
			const currencies = country.currencies ? Object.values(country.currencies).map(currency => currency.name) : []
			return currencies.includes(currency)
		})
	}

	return filtered
}
