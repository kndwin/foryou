import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/client'

import {  Layout, LandingPage, 
	Editor, Loading } 
from 'components'
import styles from 'styles/pages/editor.module.scss'

export default function IndexPage () {

  const [session, loading] = useSession()

	if (loading) {
		return  (
			<Loading />
		)
	}
	// TODO: wrap variables in state management.
  const [mounted, setMounted] = useState<boolean>(false)
	const [hide, setHide] = useState<boolean>(false)
	const [preview, setPreview] = useState<boolean>(false)

	useEffect(() => {
		setMounted(true)
	},[])

  if (!mounted) {
    return null
  }

  return (
    <Layout hide={hide} preview={() => setPreview(!preview)}>
      {session ? <div className={styles.container}>
				<Editor preview={preview}/>
			</div> :
      <div>
				<LandingPage />
			</div>}
    </Layout>
  )
}
