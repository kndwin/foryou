import { Layout, LandingPage, Loading } from 'components'
import { useSession } from 'next-auth/client'

export default function IndexPage () {

  const [session, loading] = useSession()

	if (loading) {
		return  (
			<Loading />
		)
	}
  return (
    <Layout>
				<LandingPage />
    </Layout>
  )
}
