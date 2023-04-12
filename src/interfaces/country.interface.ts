import { jsx } from '@emotion/react'
import IntrinsicAttributes = jsx.JSX.IntrinsicAttributes

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
	flags: IFlags
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

interface IFlags {
	png: string
	alt: string
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

export interface DataAllCountries {
	countries: ICountry[]
}

export interface DataPaginateCountries extends IntrinsicAttributes {
	data: ICountry[]
	countries: ICountry[]
}

export interface DataSingleCountry {
	country: ICountry
}
