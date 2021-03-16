import { providers } from 'next-auth/client'
import { Providers } from 'next-auth/providers'
import { csrfToken } from 'next-auth/client'
import Link from 'next/link'

import styles from './signin.module.scss'
import { Button, Layout } from 'components'

export default function SignIn({ 
	providers,
	csrfToken
} : {
	providers: Providers,
	csrfToken: string
}) {
  return (
    <Layout>
			<div className={styles.container}>
				{Object.values(providers).map(provider => (
					<div key={provider.name}>
						{provider.name == "Credentials" &&
							<form method="post" 
								action="/api/auth/callback/credentials"
								className={styles.form}
							>
								<h1>
									Login
								</h1>
								<input name="csrfToken" 
									type="hidden" 
									defaultValue={csrfToken}
								/>
								<input name="username" 
									type="text"
									placeholder="username"
								/>
								<input name="password" 
									type="password"
									placeholder="********"
								/>
								<div className={styles.submitCancel}>
									<Button type="submit">
										Sign in
									</Button>
									<Link href="/">
										<a className={styles.cancel}>
											Cancel
										</a>
									</Link>
								</div>
							</form>
						}
					</div>
				))}
			</div>
    </Layout>
  )
}

SignIn.getInitialProps = async (context) => {
  return {
    providers: await providers(),
    csrfToken: await csrfToken(context)
  }
}
