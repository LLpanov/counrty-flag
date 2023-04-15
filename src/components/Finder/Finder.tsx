import React, { FC, useState } from 'react'
import { Input } from '@chakra-ui/input'

interface FinderProps {
	onSearch: (searchTerm: string) => void
}

const Finder: FC<FinderProps> = ({ onSearch }) => {
	const [search, setSearch] = useState('')
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const inputValue = e.target.value.trim()
		if (/^[a-zA-Z\s]*$/.test(inputValue)) {
			setSearch(inputValue)
			onSearch(inputValue)
		} else {
			alert('Please enter only English letters')
		}
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
