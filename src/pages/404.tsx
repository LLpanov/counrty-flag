import { NextPage } from 'next'
import Image from 'next/image'
import { Text, Flex, Box } from '@chakra-ui/react'

import Layout from '@/components/Layout/Layout'

const NotFound: NextPage = () => {
	return (
		<Layout title='NotFound'>
			<Flex minHeight='100vh' alignItems='center' justifyContent='center' flexDirection='row'>
				<Box textAlign='center'>
					<Image src={'/404.png'} alt='error' width={550} height={343} />
					<Text mt='20px' fontFamily='cursive' fontSize='xl'>
						not found page...
					</Text>
				</Box>
			</Flex>
		</Layout>
	)
}

export default NotFound
