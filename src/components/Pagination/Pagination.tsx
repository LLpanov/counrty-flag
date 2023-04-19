import React, { FC } from 'react'
import { Box, Button, ButtonGroup, Text } from '@chakra-ui/react'
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'

interface IPaginationProps {
	currentPage: number
	totalPages: number
	onPageChange: (selectedPage: number) => void
}

const Pagination: FC<IPaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
	const handlePageChange = (selectedPage: number) => {
		onPageChange(selectedPage)
	}

	return (
		<Box display='flex' justifyContent='center' marginTop='40px' marginBottom='30px'>
			<ButtonGroup>
				<Button
					isDisabled={currentPage === 1}
					onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
						e.preventDefault()
						handlePageChange(currentPage - 1)
					}}
				>
					<ChevronLeftIcon />
				</Button>

				<Box display='flex' alignItems='center' padding={2}>
					<Text as='span'>{currentPage}</Text>
				</Box>

				<Button
					isDisabled={currentPage === totalPages}
					onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
						e.preventDefault()
						handlePageChange(currentPage + 1)
					}}
				>
					<ChevronRightIcon />
				</Button>
			</ButtonGroup>
		</Box>
	)
}

export default React.memo(Pagination)
