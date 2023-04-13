import { FC } from 'react'
import Image from 'next/image'
import { Checkbox, Flex, Heading, Stack, IconButton, Select, useColorMode, useMediaQuery } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

import Finder from '@/components/Finder/Finder'

const Header: FC = () => {
	const { colorMode, toggleColorMode } = useColorMode()
	const [isSmaller] = useMediaQuery('(max-width: 56em)')
	return (
		<Flex as='header' bg='gray.500' justifyContent='space-between' px={6} py={3} alignItems='center' gap='10'>
			<Flex display={isSmaller ? 'none' : 'block'}>
				<Image src='/logoflag2.svg' width={60} height={70} alt='flagLogo' />
			</Flex>
			<Heading as='h4' fontFamily='Dancing Script' size={isSmaller ? 'sm' : 'md'} display={isSmaller ? 'none' : 'block'}>
				Get smth new about country...
			</Heading>
			<Stack spacing={3} direction='row'>
				<Checkbox colorScheme='red' defaultChecked>
					independence
				</Checkbox>
			</Stack>
			<Finder />
			<Select width='xs' size={'md'} placeholder='Select region' cursor='pointer' borderColor='whiteAlpha.300'>
				<option value='option1'>Europe</option>
				<option value='option2'>Asia</option>
				<option value='option3'>America</option>
				<option value='option4'>Africa</option>
				<option value='option5'>Oceania</option>
			</Select>

			<IconButton aria-label='Toggle theme' variant='ghost' size={'lg'} colorScheme='white' icon={colorMode === 'light' ? <MoonIcon color='#fad085' /> : <SunIcon />} onClick={toggleColorMode} />
		</Flex>
	)
}

export default Header
