import React, { ReactNode } from 'react'
//import Link from 'next/link'
import Head from 'next/head'
import styles from './Layout.module.scss'
import { signOut, signIn, useSession } from 'next-auth/client'

export default function Layout ({ 
  children, 
  title = 'For you' 
}: {
  children?: ReactNode
  title?: string
}) {
  const [session] = useSession()

  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <nav className={styles.nav}>
          {session ? (
            <>
              <div>{session.user.name}</div>
              <a onClick={(e) => {
                e.preventDefault()
                signOut()
              }}>Sign out</a>
            </>
          ) : (
            <>
              <div/>
              <a href={'/api/auth/signin'}
                onClick={(e) => {
                  e.preventDefault()
                  signIn()
                }}>
                Sign in
              </a>
            </>
          )}
        </nav>
      </header>
      {children}
      <footer>
        <hr />
        <span>coded with 🖤</span>
      </footer>
    </div>
  )
}
