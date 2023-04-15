import React, { FC, useState } from 'react'
import { Input } from '@chakra-ui/input'
import { Select, Stack } from '@chakra-ui/react'

interface FinderProps {
	onSearch: (searchTerm: string, region: string, language: string, currency: string) => void
}

const Finder: FC<FinderProps> = ({ onSearch }) => {
	const [search, setSearch] = useState('')
	const [region, setRegion] = useState('')
	const [language, setLanguage] = useState('')
	const [currency, setCurrency] = useState('')
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const inputValue = e.target.value.trim()
		if (/^[a-zA-Z\s]*$/.test(inputValue)) {
			setSearch(inputValue)
			onSearch(inputValue, region, language, currency)
		} else {
			alert('Please enter only English letters')
		}
	}
	const handleRegionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setRegion(e.target.value)
		onSearch(search, e.target.value, language, currency)
	}

	const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setLanguage(e.target.value)
		onSearch(search, region, e.target.value, currency)
	}

	const handleCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setCurrency(e.target.value)
		onSearch(search, region, language, e.target.value)
	}

	return (
		<Stack direction={['column', null, 'row', 'row']} marginLeft={[1, 1, 1, 30]} spacing={[3, 3, 3, 8]}>
			<Input
				width={['260px', 'xs', 'xs', 'sm']}
				placeholder='find country...'
				htmlSize={20}
				borderColor='whiteAlpha.300'
				_placeholder={{ color: 'gray.400', _dark: { color: 'gray.500', opacity: 0.6 } }}
				onChange={handleChange}
				value={search}
			/>

			<Select width={['250px', '250px', '180px', '260px']} size={'md'} placeholder='selection region' cursor='pointer' value={region} onChange={handleRegionChange} borderColor='whiteAlpha.300'>
				<option value='Europe'>Europe</option>
				<option value='Asia'>Asia</option>
				<option value='Americas'>Americas</option>
				<option value='Africa'>Africa</option>
				<option value='Oceania'>Oceania</option>
			</Select>

			<Select width={['250px', '250px', '180px', '260px']} size={'md'} placeholder='select language' value={language} onChange={handleLanguageChange} cursor='pointer' borderColor='whiteAlpha.300'>
				<option value='English'>English</option>
				<option value='Italian'>Italian</option>
				<option value='Spanish'>Spanish</option>
				<option value='Chinese'>Chinese</option>
				<option value='French'>French</option>
				<option value='Portuguese'>Portuguese</option>
				<option value='German'>German</option>
			</Select>

			<Select width={['250px', '250px', '180px', '230px']} size={'md'} placeholder='select currency' value={currency} onChange={handleCurrencyChange} cursor='pointer' borderColor='whiteAlpha.300'>
				<option value='United States dollar'>$ (USD)</option>
				<option value='Euro'>€ (EUR)</option>
				<option value='British pound'>£ (GBP)</option>
				<option value='Swiss franc'>₣ (CHF)</option>
			</Select>
		</Stack>
	)
}

export default Finder
