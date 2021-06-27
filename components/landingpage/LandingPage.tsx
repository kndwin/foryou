import styles from './LandingPage.module.scss'

export default function LandingPage() {
	return (
		<>
			<h1>minimal markdown editor</h1>
			<p>
				📄 simple and distraction-free. 
				<br />
				🔒 secured with authentication.
				<br />
				💻 syntax highlighting supported.
			</p>
			<img src="/landing.webp" 
				className={styles.image}
				alt="groups of people" />
		</>
	)
}
