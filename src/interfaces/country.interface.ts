export interface ICountry {
	independent: string
	status: string
	name: IName
	capital: string[]
	timezone: string[]
	region: string
	landlocked: boolean
	population: number
	startOfWeek: string
	maps: IMaps
	car: ICar
	languages: ILang
	flags: string
	coatOfArms: string
	currencies: { [key: string]: ICurrency }
}

interface ICurrency {
	name: string
	symbol: string
}

interface IName {
	common: string
	official: string
}

interface ILang {
	[key: string]: string
}

interface ICar {
	side: string
}

interface IMaps {
	openStreetMaps: string
}

export interface DataCountries {
	countries: ICountry[]
}

export interface DataSingleCountry {
	country: ICountry
}
