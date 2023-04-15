import { FC } from 'react'
import Image from 'next/image'
import { Flex, Heading, IconButton, useColorMode, useMediaQuery } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

const Header: FC = () => {
	const { colorMode, toggleColorMode } = useColorMode()
	const [isSmaller] = useMediaQuery('(max-width: 599px)')
	return (
		<Flex as='header' bg='gray.500' justifyContent='space-between' px={6} py={3} alignItems='center' gap='10' boxShadow={'md'}>
			<Flex>
				<Image src='/oon.png' width={100} height={67} alt='flagLogo' />
			</Flex>
			<Heading as='h2' fontFamily='Dancing Script' size={isSmaller ? 'md' : 'xl'} display={isSmaller ? 'none' : 'block'}>
				Get smth new about country...
			</Heading>
			<IconButton aria-label='Toggle theme' variant='ghost' size={'lg'} colorScheme='white' icon={colorMode === 'light' ? <MoonIcon color='#fad085' /> : <SunIcon />} onClick={toggleColorMode} />
		</Flex>
	)
}

export default Header
