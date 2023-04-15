import { FC } from 'react'
import Image from 'next/image'
import { Badge, Box, Flex, Stack, Text, useColorMode } from '@chakra-ui/react'

import { DataSingleCountry } from '@/interfaces/country.interface'
import Link from 'next/link'

const FlagsCard: FC<DataSingleCountry> = ({
	country: {
		name: { common },
		languages,
		capital,
		currencies,
		region,
		flags
	}
}) => {
	const { colorMode } = useColorMode()
	return (
		<Stack>
			<Link href={`country/${common}`}>
				<Box
					cursor={'pointer'}
					width={230}
					height={320}
					overflow='hidden'
					borderRadius='md'
					boxShadow='md'
					bg={colorMode === 'dark' ? '#2c2c3b' : 'whiteAlpha.900'}
					opacity={colorMode === 'dark' ? 0.9 : 1}
					transition='background-color 0.3s ease-in-out'
					_hover={{
						bg: colorMode === 'dark' ? '#3e3e54' : 'whiteAlpha.800',
						opacity: 1
					}}
				>
					<Box padding={1}>
						<Box position='relative' width='100%' height='125px' borderRadius='md' overflow='hidden'>
							<Image priority={true} src={flags.png} sizes='(max-width: 230px) 50vw, 33vw)' alt={flags.alt ?? 'flag' + ' picture'} fill />
						</Box>
					</Box>
					<Stack padding={3} spacing={1}>
						<Text fontSize='md' fontWeight='semibold'>
							{common}
						</Text>
						<Text fontSize='xs' color='goldenrod'>
							Capital: {capital}
						</Text>
						<Text fontSize='xs'>Region: {region}</Text>
						<Text fontSize='xs' isTruncated>
							Languages: {languages ? Object.values(languages).join(', ') : null}
						</Text>
					</Stack>
					<Flex wrap='wrap' width={'fit-content'} padding={2} gap={1} flexDirection={'row'}>
						{currencies &&
							Object.values(currencies).map(currency => (
								<Badge fontSize={'12px'} key={currency.name} paddingX={1} variant='outline' colorScheme='green' isTruncated maxW={200}>
									{currency ? `${currency.symbol} - ${currency.name}` : '?'}
								</Badge>
							))}
					</Flex>
				</Box>
			</Link>
		</Stack>
	)
}

export default FlagsCard
