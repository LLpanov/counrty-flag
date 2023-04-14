import React, { FC, useState } from 'react'
import { Input } from '@chakra-ui/input'

const Finder: FC = () => {
	const [search, setSearch] = useState('')
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault()
		setSearch(e.target.value)
	}
	return (
		<>
			<Input
				placeholder='find country...'
				htmlSize={20}
				borderColor='whiteAlpha.300'
				_placeholder={{ color: 'gray.400', _dark: { color: 'gray.500', opacity: 0.6 } }}
				onChange={handleChange}
				value={search}
			/>
		</>
	)
}

export default Finder
