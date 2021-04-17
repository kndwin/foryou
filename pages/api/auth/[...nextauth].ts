import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

export default NextAuth({
  providers: [
		Providers.Credentials({
			name: "Credentials",
			credentials: {
				username: {
					label: "Username",
					type: "text",
				},
				password: {
					label: "Password",
					type: "password"
				}
			},
			async authorize( credentials ) {
				console.log(credentials.username)
				let user = await fetch('http://localhost:3001/graphql', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
						'Accept': 'application/json',
					},
					body: JSON.stringify({ 
						query: `{ getUser (name: "${credentials.username}"){ name }}`
					})
				})
					.then(res => res.json())
					.catch(error => console.error(`Error: ${error}`))

				console.log(user)

				if (user) {
					return { 
						name: user.name,
					}
				} else {
					return null
				}

			}
		}),
		Providers.GitHub({
			clientId: process.env.GITHUB_ID,
			clientSecret: process.env.GITHUB_SECRET
		})
  ],
	session: {
		jwt: true
	},
	jwt: {
		secret:"INp8IvdIyeMcoGAgFGoA61DdBglwwSqnXJZkgz8PSnw"
	},
	events: {
		async signIn(message) { /* on successful sign in */ },
		async signOut(message) { /* on signout */ },
		async createUser(message) { /* user created */ },
		async linkAccount(message) { /* account linked to a user */ },
		async session(message) { /* session is active */ },
		async error(message) { /* error in authentication flow */ }
	},
	callbacks: {
		async redirect(url, baseUrl) {
			return baseUrl + "/editor"
		},
	},
	debug: true,
	pages: {
    signIn: '/auth/signin'
	}
})
