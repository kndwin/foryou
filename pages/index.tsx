import { useState } from 'react'
import { useSession } from 'next-auth/client'

import  { Button, Layout, LandingPage, Editor } from 'components'
import styles from './index.module.scss'

export default function IndexPage () {

  const [session] = useSession()

	const [hide, setHide] = useState<boolean>(false)
	const [preview, setPreview] = useState<boolean>(false)

  return (
    <Layout hide={hide} 
			preview={() => setPreview(!preview)}>
      {!session && <div>
				<LandingPage />
			</div>}
      {session && <div className={styles.container}>
				<Editor preview={preview}/>
			</div>
			}
    </Layout>
  )
}
