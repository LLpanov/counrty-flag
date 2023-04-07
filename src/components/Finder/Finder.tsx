import { FC } from 'react'
import { Input } from '@chakra-ui/input'

const Finder: FC = () => {
	return (
		<>
			<Input placeholder='find country...' htmlSize={20} width='auto' size='md' borderColor='whiteAlpha.300' />
		</>
	)
}

export default Finder
