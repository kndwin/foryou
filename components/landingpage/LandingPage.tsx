import styles from './LandingPage.module.scss'
export default function LandingPage() {
	return (
		<>
			<h1>a minimal markdown editor</h1>
			<p>
				✍ simple and distraction-free
			</p>
			<img src="/landing.webp" 
				className={styles.image}
				alt="groups of people" />
		</>
	)
}
