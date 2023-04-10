import { FC } from 'react'

import Layout from '@/components/Layout/Layout'
import { DataCountries } from '@/interfaces/country.interface'
import Loading from '@/components/Layout/Loading'
import FlagsCard from '@/components/FlagCard/FlagsCard'

const Home: FC<DataCountries> = ({ countries }) => {
	return (
		<Layout title='Home' description='The general page all countries'>
			{countries.length ? countries.map(country => <FlagsCard key={country.population} country={country} />) : <Loading />}
		</Layout>
	)
}

export default Home
