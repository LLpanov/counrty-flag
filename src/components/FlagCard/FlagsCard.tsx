import { FC } from 'react'
import { DataSingleCountry } from '@/interfaces/country.interface'

const FlagsCard: FC<DataSingleCountry> = ({ country }) => {
	return (
		<>
			<div>{country.name.common}</div>
		</>
	)
}

export default FlagsCard
