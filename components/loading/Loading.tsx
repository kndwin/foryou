import styles from './Loading.module.scss'

export default function Loading () {
	return (
	<div className={styles.loading}>
		<h1 className={styles.loadingText}>
			Loading
		</h1>
	</div>
	)
}
