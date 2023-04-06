import { NextPage } from 'next'
import Image from 'next/image'

import Layout from '@/components/layout/Layout'



const NotFound: NextPage = () => {
	return <Layout title='NotFound'>
		     <Image src={'/404.png'} alt='error' width={550} height={343}/>
	       </Layout>
}

export default NotFound