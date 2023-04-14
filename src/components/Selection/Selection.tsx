import { FC } from 'react'
import { HStack, Select } from '@chakra-ui/react'

const Selection: FC = () => {
	return (
		<HStack spacing={3}>
			<Select width='xs' size={'md'} placeholder='selection region' cursor='pointer' borderColor='whiteAlpha.300'>
				<option value='option1'>Europe</option>
				<option value='option2'>Asia</option>
				<option value='option3'>America</option>
				<option value='option4'>Africa</option>
				<option value='option5'>Oceania</option>
			</Select>

			<Select width='xs' size={'md'} placeholder='select language' cursor='pointer' borderColor='whiteAlpha.300'>
				<option value='option1'>Spanish</option>
				<option value='option2'>English</option>
				<option value='option3'>French</option>
				<option value='option3'>Italian</option>
				<option value='option3'>Portuguese</option>
				<option value='option4'>Chinese</option>
				<option value='option5'>German</option>
			</Select>

			<Select width={'200px'} size={'md'} placeholder='select currency' cursor='pointer' borderColor='whiteAlpha.300'>
				<option value='option1'>$ (USD)</option>
				<option value='option2'>€ (EUR)</option>
				<option value='option3'>£ (GBP)</option>
				<option value='option4'>¥ (CNY)</option>
			</Select>
		</HStack>
	)
}

export default Selection
