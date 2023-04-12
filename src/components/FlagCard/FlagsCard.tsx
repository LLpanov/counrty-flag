import { FC } from 'react'
import { Text, Box, Stack, useColorMode } from '@chakra-ui/react'
import Image from 'next/image'

import { DataSingleCountry } from '@/interfaces/country.interface'

const FlagsCard: FC<DataSingleCountry> = ({ country: { name, languages, capital, currencies, region, flags } }) => {
	const { colorMode } = useColorMode()
	return (
		<Stack>
			<Box width={210} height={255} overflow='hidden' borderRadius='md' boxShadow='md' bg={colorMode === 'dark' ? '#2c2c3b' : 'whiteAlpha.900'} opacity={colorMode === 'dark' ? 0.9 : 1}>
				<Box padding={0.5}>
					<Box padding={10} position='relative' width='100%' height='120px' borderRadius='md' overflow='hidden'>
						<Image priority={true} src={flags.png} sizes='(max-width: 260px) 50vw, 33vw)' alt={flags.alt ?? 'flag' + ' picture'} fill />
					</Box>
				</Box>
				<Stack padding={3} spacing={1}>
					<Text fontSize='md' fontWeight='semibold'>
						{name.common}
					</Text>
					<Text fontSize='xs' color='goldenrod'>
						Capital: {capital}
					</Text>
					<Text fontSize='xs'>Region: {region}</Text>
					<Text fontSize='xs' isTruncated>
						Languages: {languages ? Object.values(languages).join(', ') : null}
					</Text>
				</Stack>
			</Box>
		</Stack>
	)
}

export default FlagsCard
