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
