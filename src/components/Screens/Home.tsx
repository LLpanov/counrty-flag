import React, { FC, useState } from 'react'
import { Divider, HStack, SimpleGrid } from '@chakra-ui/react'

import { DataPaginateCountries, ICountry } from '@/interfaces/country.interface'
import Layout from '@/components/Layout/Layout'
import FlagsCard from '@/components/FlagCard/FlagsCard'
import Loading from '@/components/Layout/Loading'
import { filterCountries, getPageOfCountries, getTotalPages } from '@/util/util'
import Pagination from '@/components/Pagination/Pagination'
import Finder from '@/components/Finder/Finder'

const Home: FC<DataPaginateCountries> = ({ data, countries }) => {
	const [currentPage, setCurrentPage] = useState(1)
	const [filteredData, setFilteredData] = useState<ICountry[]>(countries)
	const pageSize = 12

	const handlePageChange = (selectedPage: number) => {
		setCurrentPage(selectedPage)
	}

	const filterData = (searchTerm: string, region: string, language: string, currency: string) => {
		const filtered = filterCountries(countries, searchTerm, region, language, currency)
		setFilteredData(filtered)
		setCurrentPage(1)
	}
	const filteredPaginatedData = getPageOfCountries(filteredData, currentPage, pageSize)
	const totalPages = getTotalPages(filteredData, pageSize)

	return (
		<Layout title='Home' description='The general page all countries'>
			<HStack padding={3} spacing={3} bg={'#8294ad'} boxShadow={'md'}>
				<Finder onSearch={filterData} />
			</HStack>
			{data.length ? (
				<>
					{/*<Divider orientation='horizontal' my={1} />*/}
					<SimpleGrid columns={[1, 2, 3, 4]} spacing={6} justifyItems={'center'} mt={'10'} mb={'5'} alignItems='center'>
						{filteredPaginatedData.map((country: any) => (
							<FlagsCard key={country.name.common} country={country} />
						))}
					</SimpleGrid>
					<Divider orientation='horizontal' my={3} />
					<Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} />
				</>
			) : (
				<Loading />
			)}
		</Layout>
	)
}

export default Home
