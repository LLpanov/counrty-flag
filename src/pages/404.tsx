import { NextPage } from 'next'
import Image from 'next/image'
import { Text, Flex, Box } from '@chakra-ui/react'

import Layout from '@/components/Layout/Layout'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const NotFound: NextPage = () => {
	const router = useRouter()
	useEffect(() => {
		setTimeout(() => {
			router.push('/')
		}, 5000)
	}, [])
	return (
		<Layout title='NotFound'>
			<Flex minHeight='100vh' alignItems='center' justifyContent='center' flexDirection='row'>
				<Box textAlign='center'>
					<Image src='/404.png' alt='error' width={550} height={343} />
					<Text mt='20px' fontFamily='cursive' fontSize='xl'>
						not found page...
					</Text>
				</Box>
			</Flex>
		</Layout>
	)
}

export default NotFound
