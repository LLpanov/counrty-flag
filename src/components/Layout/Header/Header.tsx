import { FC } from 'react'
import Image from 'next/image'
import { Flex, Heading, IconButton, useColorMode, useMediaQuery } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

const Header: FC = () => {
	const { colorMode, toggleColorMode } = useColorMode()
	const [isSmaller] = useMediaQuery('(max-width: 56em)')
	return (
		<Flex as='header' bg='gray.500' justifyContent='space-between' px={6} py={3} alignItems='center' gap='10' boxShadow={'md'}>
			<Flex display={isSmaller ? 'none' : 'block'}>
				<Image src='/logoflag2.svg' width={60} height={70} alt='flagLogo' />
			</Flex>
			<Heading as='h4' fontFamily='Dancing Script' size={isSmaller ? 'sm' : 'md'} display={isSmaller ? 'none' : 'block'}>
				Get smth new about country...
			</Heading>
			<IconButton aria-label='Toggle theme' variant='ghost' size={'lg'} colorScheme='white' icon={colorMode === 'light' ? <MoonIcon color='#fad085' /> : <SunIcon />} onClick={toggleColorMode} />
		</Flex>
	)
}

export default Header
