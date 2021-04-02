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
				const user = (credentials) => {
					return { 
						name: credentials.username
					}
				}

				if (user) {
					return { 
						name: "Kevin",
						email: 'kevin@orionnt',
						image: 'https://avatars.githubusercontent.com/u/22161029?v=4'
					}
				} else {
					return null
				}
			}
		}),
		Providers.GitHub({
			clientId: process.env.GITHUB_CLIENT_ID,
			clientSecret: process.env.GITHUB_CLIENT_SECRET
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
			return baseUrl
		},
	},
	debug: true,
  database: 'sqlite://localhost/:memory:',
	pages: {
    signIn: '/auth/signin'
	}
})
