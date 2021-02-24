import React, { ReactNode } from 'react'
import Head from 'next/head'
import styles from './Layout.module.scss'
import { signOut, signIn, useSession } from 'next-auth/client'
import Link from 'next/link'

export default function Layout ({ 
  children, 
  title = 'For you',
	editor
}: {
  children?: ReactNode
  title?: string,
	editor: boolean
}) {
  const [session] = useSession()

  return (
    <div className={editor ? `${styles.container} ${styles.editor}` : styles.container}>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header className={editor ? '' : styles.header}>
					{session && !editor && (
					<>
						<div>{session.user.name}</div>
						<Link href="/editor">
							<a>Editor</a>
						</Link>
						<a href={'/api/auth/signout'}
							onClick={(e) => {
							e.preventDefault()
							signOut()
						}}>Sign out</a>
					</>
					)} {!session && !editor && (
					<>
						<Link href="/">
							<a><h1>For you</h1></a>
						</Link>
						<a href={'/api/auth/signin'}
							onClick={(e) => {
								e.preventDefault()
								signIn()
							}}>
							Sign in
						</a>
					</>
				)} {editor && ( 
					<>
					</>
				)}
      </header>
			<main className={styles.main}>
				{children}
			</main>
			{!editor && (
				<footer className={styles.footer}>
					<hr />
					<span>coded with 🖤</span>
				</footer>
			)}

    </div>
  )
}
