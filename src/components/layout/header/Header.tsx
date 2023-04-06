import { FC } from 'react'
import { Flex, Spacer, IconButton, useColorMode } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

const Header: FC = () => {
	const { colorMode, toggleColorMode } = useColorMode()

	return (
		<Flex as='header' bg='gray.600' px={6} py={3} alignItems='center'>
			<Flex flex='1' alignItems='center'>
				<span>Logo</span>
			</Flex>
			<Spacer />
			<IconButton
				aria-label='Toggle theme'
				variant='ghost'
				colorScheme='white'
				icon={
					colorMode === 'light' ? <MoonIcon color='#FFA500' /> : <SunIcon />
				}
				onClick={toggleColorMode}
			/>
		</Flex>
	)
}

export default Header
