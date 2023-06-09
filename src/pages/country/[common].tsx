import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { ParsedUrlQuery } from 'querystring'

import SingleFlagCard from '@/components/Screens/SingleFlagCard'
import { countryService } from '@/services/country.service'
import { DataSingleCountry } from '@/interfaces/country.interface'

interface Params extends ParsedUrlQuery {
	common: string
}

const CountryPage: NextPage<DataSingleCountry> = ({ country }) => {
	return <SingleFlagCard country={country} />
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
	const countries = await countryService.getAll()
	const paths = countries.map(country => ({
		params: { common: country.name.common }
	}))
	return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	if (!params?.common) {
		return { notFound: true }
	}
	const common = params.common as string
	const country = await countryService.getByName(common)
	if (!country) {
		return { notFound: true }
	}
	return {
		props: { country }
	}
}
export default CountryPage
