import React, { useState, useEffect} from "react"
import SimpleMDEReact from "react-simplemde-editor"
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import hljs from 'highlight.js'

import styles from './Editor.module.scss'
import { CodeBlock } from 'components'
import { prefilledText } from 'lib/helpers'

export default function Editor({
	preview,
}:{
	preview?: boolean
}) {

	const [text, setText] = useState<string>(prefilledText)
	const [mount, setMount] = useState<boolean>(false)
	
	const updateText = (value: string) => {
		setText(value)
	}

	useEffect(()=> setMount(true))

  return (
		<div className={styles.container}>
			{mount && !preview && <SimpleMDEReact
				className={styles.editor}
				value={text}
				onChange={updateText}
				options={{
					renderingConfig: {
						codeSyntaxHighlighting: true,
						hljs: hljs
					}, 
					autosave: { 
						enabled: true,
						uniqueId: "uniqId"
					},
					status: false,
					toolbar: false
				}}
			/>}
			{mount && preview && <div className={`${styles.preview} 
				markdown-body`}>
				<ReactMarkdown 
					plugins={[gfm]}
					renderers={CodeBlock}
				>
				{text}
				</ReactMarkdown>
			</div>}
		</div>
  )
} 
