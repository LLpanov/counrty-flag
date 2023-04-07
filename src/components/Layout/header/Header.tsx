import { FC } from 'react'
import { Flex, Heading, IconButton, Select, useColorMode } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

import Finder from '@/components/Finder/Finder'

const Header: FC = () => {
	const { colorMode, toggleColorMode } = useColorMode()
	return (
		<Flex as='header' bg='gray.600' px={6} py={3} alignItems='center' gap='10'>
			<span>Logo</span>
			<Heading as='h4' size='md'>
				Get smth new about country...
			</Heading>
			<Finder />
			<Select width='2xs' placeholder='Select region' cursor='pointer' borderColor='whiteAlpha.300'>
				<option value='option1'>Europe</option>
				<option value='option2'>Asia</option>
				<option value='option3'>America</option>
				<option value='option4'>Africa</option>
				<option value='option5'>Oceania</option>
			</Select>

			<IconButton aria-label='Toggle theme' variant='ghost' colorScheme='white' icon={colorMode === 'light' ? <MoonIcon color='#FFA500' /> : <SunIcon />} onClick={toggleColorMode} />
		</Flex>
	)
}

export default Header
