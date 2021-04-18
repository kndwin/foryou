import styles from './CreateUser.module.scss'

export default function CreateUser() {
  return (
		<div>
		<h1>SignUp</h1>
		<form action="submit">
			<input type="text" placeholder="Username" />
			<input type="text" placeholder="Password" />
			<input type="submit" />
		</form>
		</div>
  )
} 
