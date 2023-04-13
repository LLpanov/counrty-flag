import { NextPage } from 'next'
import SingleFlagCard from '@/components/SingleFlagCard/SingleFlagCard'
import { useRouter } from 'next/router'

const CountryPage: NextPage = () => {
	const router = useRouter()
	const { languages } = router.query
	return <SingleFlagCard languages={languages} />
}

export default CountryPage
