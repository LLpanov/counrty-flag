import React, { FC, useState } from 'react'
import { Box, Divider, Flex, SimpleGrid } from '@chakra-ui/react'

import { DataPaginateCountries, ICountry } from '@/interfaces/country.interface'
import Layout from '@/components/Layout/Layout'
import FlagsCard from '@/components/FlagCard/FlagsCard'
import Loading from '@/components/Layout/Loading'
import { getPageOfCountries, getTotalPages } from '@/util/util'
import Pagination from '@/components/Pagination/Pagination'

const Home: FC<DataPaginateCountries> = ({ data, countries }) => {
	const [currentPage, setCurrentPage] = useState(1)
	const pageSize = 12

	const handlePageChange = (selectedPage: number) => {
		setCurrentPage(selectedPage)
	}

	const paginatedData = getPageOfCountries(countries, currentPage, pageSize)
	const totalPages = getTotalPages(countries, pageSize)

	return (
		<Layout title='Home' description='The general page all countries'>
			{data.length ? (
				<>
					<Divider orientation='horizontal' my={18} />
					<SimpleGrid columns={[1, 2, 3, 4]} spacing={6} justifyItems={'center'} mt={'10'} mb={'5'} alignItems='center'>
						{paginatedData.map((country: ICountry) => (
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
