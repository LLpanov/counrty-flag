import { NextPage } from 'next'

import Home from '@/components/Screens/Home'
import { DataCountries } from '@/interfaces/country.interface'
import { countryService } from '@/services/country.service'

const HomePage: NextPage<DataCountries> = ({ countries }) => {
	return <Home countries={countries} />
}

export default HomePage

export const getStaticProps: () => Promise<{ revalidate: number; props: { countries: DataCountries } }> = async () => {
	const countries = await countryService.getAll()

	return {
		props: {
			countries
		},
		revalidate: 60
	}
}
