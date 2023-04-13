import { FC } from 'react'
import { Text } from '@chakra-ui/react'
import Layout from '@/components/Layout/Layout'

const SingleFlagCard: FC<any> = () => {
	return (
		<Layout title={'Japan'} description={'Detail information about this country'}>
			<Text>Single</Text>
		</Layout>
	)
}

export default SingleFlagCard
