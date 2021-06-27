import { useState } from 'react'
import { GraphQLClient, gql } from 'graphql-request'

import { Button } from 'components'
import styles from './CreateUser.module.scss'

export default function CreateUser() {

	const [formData, setFormData] = useState({
		username: '',
		password: ''
	})

	async function postUser(event) {
		event.preventDefault()
		const mutation = gql`
			mutation {
				createUser($name: String!, $source: String!) {
					name
				}
			} 
		`
		const variables = {
			name: formData.username,
			source: 'manual'
		}
		const endpoint = 'https://minmd.herokuapp.com/graphql'
		const graphQLClient = new GraphQLClient(endpoint)
		graphQLClient.request(mutation, variables)
	}

  return (
		<div>
			<h1>SignUp</h1>
			<form onSubmit={postUser}>
				<input name="username" 
					type="text"
					value={formData.username}
					onChange={(e) => setFormData({
						...formData, 
						username: e.target.value
					})}
					placeholder="username"
				/>
				<input name="password" 
					value={formData.password}
					onChange={(e) => setFormData({
						...formData, 
						password: e.target.value
					})}
					type="password"
					placeholder="********"
				/>
				<Button type="submit">
					Sign up
				</Button>
			</form>
		</div>
  )
} 
