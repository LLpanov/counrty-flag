import { GetStaticProps, NextPage } from 'next'

import Home from '@/components/Screens/Home'
import { DataAllCountries } from '@/interfaces/country.interface'
import { countryService } from '@/services/country.service'
import { getPageOfCountries } from '@/util/util'

const HomePage: NextPage<DataAllCountries> = ({ countries }) => {
	const data = getPageOfCountries(countries)
	return <Home data={data} countries={countries} />
}
export const getStaticProps: GetStaticProps = async () => {
	const countries = await countryService.getAll()

	return {
		props: {
			countries
		},
		revalidate: 60
	}
}

export default HomePage
