import { FC } from 'react'
import { Box, Spinner } from '@chakra-ui/react'

const Loading: FC = () => {
	return (
		<Box display='flex' justifyContent='center' height='100vh' alignItems='center'>
			<Spinner alignSelf='center' emptyColor='gray.200' color='blue.500' speed='0.80s' thickness='3px' size='xl' />
		</Box>
	)
}

export default Loading
