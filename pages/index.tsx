import Layout from '../components/Layout'
import { useSession } from 'next-auth/client'
import Link from 'next/link'

export default function IndexPage () {
  const [session] = useSession()

  return (
    <Layout title="For you">
      <h1>For you</h1>
      <p>An online markdown editor</p>
      {session && <>
        <Link href='/editor'>
          <a>Editor</a>
        </Link>
      </>}
    </Layout>
  )
}
