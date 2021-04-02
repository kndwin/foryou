import React, { ReactNode } from 'react'
import Head from 'next/head'
import { signOut, signIn, useSession } from 'next-auth/client'
import Link from 'next/link'

import styles from './Layout.module.scss'
import { Button } from 'components'

export default function Layout ({ 
  children, 
	hide,
	preview
}: {
  children?: ReactNode
	hide?: boolean,
	preview?: () => void,
}) {

  const [session] = useSession()

	const load = () => {
	}
	const save = () => {
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
					<div className={styles.buttonRight}>
						<Button onClick={() => load()}>
							Load
						</Button>
						<Button onClick={() => save()}>
							Save
						</Button>
						<Button onClick={() => preview()}>
							Preview
						</Button>
						<Button onClick={() => signOut()}>
							Sign Out
						</Button>
					</div>
				</>)} 
				{!session && !hide && ( <>
					<Link href="/">
						<a><h1>min.md</h1></a>
					</Link>
					<Button onClick={() => signIn()}>
						Sign in
					</Button>
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
