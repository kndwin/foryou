import styles from './Button.module.scss'

export default function Button ({
	children,
	color,
	onClick,
	type
}: {
	children: React.ReactNode
	color?: String,
	onClick?: React.MouseEventHandler<HTMLButtonElement>,
	type?: 'button' | 'submit' | 'reset'
}) {
	return (
		<button className={`
			${styles.primary}
			${styles.button}
		`}
			onClick={onClick}
		>
		
			{children}	
		</button>
	)
}
