import { providers, csrfToken, signIn } from 'next-auth/client'
import { Providers } from 'next-auth/providers'
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
    <Layout isSignInPage={true}>
			<div className={styles.container}>
				<h1>Login</h1>
				<h2>Providers</h2>
				{Object.values(providers).map(provider => (
						<div key={provider.name}>
						{provider.name == "GitHub" &&
							<Button onClick={() => signIn(provider.id)}>
								<img className={styles.logo}
									src="https://simpleicons.org/icons/github.svg" 
									alt="Github logo" />
									<br />
									<br />
							 {provider.name}
							</Button>
						}
						</div> 
				))}
				<br />
				<h4>or</h4>
				<h2>Credentials</h2>
				{Object.values(providers).map(provider => (
					<div key={provider.name}>
						{provider.name == "Credentials" &&
							<form method="post" 
								action="/api/auth/callback/credentials"
								className={styles.form}
							>
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
