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
				let graphqlParamaters = `
					{ getUser (name: "${credentials.username}"){ name }}
				`

				let query = await fetch('http://minmd.herokuapp.com/graphql', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
						'Accept': 'application/json',
					},
					body: JSON.stringify({ 
						query: graphqlParamaters
					})
				})
					.then(res => res.json())
					.catch(error => console.error(`Error: ${error}`))

				let userFound = query.data.getUser.name

				if (userFound) {
					return { 
						name: userFound
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
