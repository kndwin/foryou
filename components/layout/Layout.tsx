import React, { ReactNode } from 'react'
import Head from 'next/head'
import { signOut, signIn, useSession } from 'next-auth/client'
import Link from 'next/link'

import styles from './Layout.module.scss'
import { Button } from 'components'

export default function Layout ({ 
  children, 
	hide=false,
	preview,
	isSignInPage
}: {
  children?: ReactNode
	hide?: boolean,
	preview?: () => void,
	isSignInPage?: boolean
}) {

  const [session, loading] = useSession()

	const load = () => {}
	const save = () => {}

	if (loading) {
		return null
	}

  return (
    <div className={hide ? 
			`${styles.container} ${styles.editor}` 
			: styles.container}
		>
      <Head>
        <title>"min"</title>
        <meta charSet="utf-8" />
        <meta name="viewport" 
					content="initial-scale=1.0, width=device-width" 
				/>
      </Head>
      <header className={hide ? '' : styles.header}>
				{session && !hide && (<>
					<div className={styles.username}>
						{session.user.name}
					</div>
				</>)} 
				{!session && !hide && ( <>
					<Link href="/">
						<a><h1>min.md</h1></a>
					</Link>
					{!isSignInPage ?
					<Button onClick={() => signIn()}>
						Sign in
					</Button> : 
					<Link href="/" >
						<span className={styles.link}>
							 Go back ↩
						</span>
					</Link>
					}
				</>)} 
      </header>
			<main className={styles.main}>
				{children}
			</main>
			{!hide && <footer className={styles.footer}>
				<span>coded with 🖤 by {' '}
					<a href="https://github.com/kndwin">kndwin</a>
				</span>
			</footer>}
    </div>
  )
}
