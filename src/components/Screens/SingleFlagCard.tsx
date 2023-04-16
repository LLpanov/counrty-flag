import React, { FC } from 'react'
import { Box, Divider, Flex, List, ListItem, Table, Tbody, Td, Th, Thead, Tr, useColorMode, Heading, Button } from '@chakra-ui/react'
import Layout from '@/components/Layout/Layout'
import { DataSingleCountry } from '@/interfaces/country.interface'
import Image from 'next/image'
import Link from 'next/link'
import { ViewIcon } from '@chakra-ui/icons'

const SingleFlagCard: FC<DataSingleCountry> = ({
	country: { name, flags, landlocked, maps, startOfWeek, status, region, car, subregion, capital, languages, currencies, coatOfArms, independent, population, timezones }
}) => {
	const { colorMode } = useColorMode()

	return (
		<Layout title={name.common} description={'Detail information about this country'}>
			<Divider orientation='horizontal' my={3} />
			<Flex justify='space-around' align='center' padding={2} marginTop={3} boxShadow={'md'} height={'vh'}>
				<Box display={'flex'} padding={2} flexDirection={'column'} justifyContent={'space-between'} gap={5} boxShadow={'md'} borderRadius={'md'}>
					<Box height={'50%'}>
						<Heading size={'xs'} mb={3}>
							Country Flag
						</Heading>
						<Box>
							<Image src={flags.png} priority alt={flags.alt ? flags.alt : 'flag'} width={260} height={160} style={{ borderRadius: '10px' }} />
						</Box>
					</Box>
					{coatOfArms.png ? (
						<Box height={'50%'}>
							<Heading size={'xs'} mb={3}>
								{' '}
								Сoat of Arms{' '}
							</Heading>
							<Box>
								<Image src={coatOfArms.png} priority alt={coatOfArms.alt ? coatOfArms.alt : 'flag'} width={260} height={160} style={{ borderRadius: '10px' }} />
							</Box>
						</Box>
					) : null}
				</Box>
				<Box w='40%' p={4} rounded='md' boxShadow='md' bg={colorMode === 'dark' ? '#2c2c3b' : 'whiteAlpha.900'} opacity={colorMode === 'dark' ? 0.9 : 1} transition='background-color 0.3s ease-in-out'>
					<Table variant='simple' size={'sm'}>
						<Thead>
							<Tr>
								<Th>Point</Th>
								<Th>Value</Th>
							</Tr>
						</Thead>
						<Tbody>
							<Tr>
								<Td>Common Name</Td>
								<Td>{name.common}</Td>
							</Tr>
							<Tr>
								<Td>Official Name</Td>
								<Td>{name.official}</Td>
							</Tr>
							<Tr>
								<Td>Status</Td>
								<Td>{status}</Td>
							</Tr>
							<Tr>
								<Td>Capital</Td>
								<Td>{capital ? capital.join(', ') : 'unknown'}</Td>
							</Tr>
							<Tr>
								<Td>Region</Td>
								<Td>{region}</Td>
							</Tr>
							<Tr>
								<Td>Subregion</Td>
								<Td>{subregion ? subregion : 'unknown'}</Td>
							</Tr>
							<Tr>
								<Td>Languages</Td>
								<Td>{languages ? Object.values(languages).join(', ') : 'unknown'}</Td>
							</Tr>
							<Tr>
								<Td>Currencies</Td>
								<Td>
									{currencies
										? Object.values(currencies)
												.map(currency => `${currency.name} (${currency.symbol ? currency.symbol : 'unknown'})`)
												.join(', ')
										: 'no official currency'}
								</Td>
							</Tr>
							<Tr>
								<Td>Population</Td>
								<Td>{(population / 1000000).toLocaleString()} million</Td>
							</Tr>
							<Tr>
								<Td>Drive Side</Td>
								<Td>{car.side}</Td>
							</Tr>
							<Tr>
								<Td>Start of Week</Td>
								<Td>{startOfWeek.charAt(0).toUpperCase() + startOfWeek.slice(1)}</Td>
							</Tr>
							<Tr>
								<Td>Timezone</Td>
								<Td>
									<List spacing={1}>
										{timezones
											? timezones.map((timezone, index) => (
													<ListItem isTruncated key={index}>
														{timezone}
													</ListItem>
											  ))
											: 'unknown'}
									</List>
								</Td>
							</Tr>
							<Tr>
								<Td>Independent</Td>
								<Td>{independent ? '✅' : '❌'}</Td>
							</Tr>
							<Tr>
								<Td>Landlocked</Td>
								<Td>{landlocked ? '✅' : '❌'}</Td>
							</Tr>
							<Tr>
								<Td>Maps</Td>
								<Td>
									<a href={maps.openStreetMaps}>
										<ViewIcon fontSize={'xl'} />
									</a>
								</Td>
							</Tr>
						</Tbody>
					</Table>
					<Button size={'sm'} fontSize={['xs', 'xs', 'sm']} mt={2}>
						<Link href={'/'}>Back to Home</Link>
					</Button>
				</Box>
			</Flex>
			<Divider orientation='horizontal' my={3} />
		</Layout>
	)
}

export default SingleFlagCard
