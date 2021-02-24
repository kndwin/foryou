import React, { useState, useEffect} from "react"
import SimpleMDEReact from "react-simplemde-editor"
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import hljs from 'highlight.js'
import styles from './editor.module.scss'
import Layout from 'components/Layout'
import { CodeBlock } from 'components/CodeBlock'
import 'github-markdown-css'
import "easymde/dist/easymde.min.css"

export default function Editor() {

	const [text, setText] = useState<string>(``)
	const [mount, setMount] = useState<boolean>(false)
	useEffect(()=> setMount(true))
	
	const updateText = (value: string) => {
		setText(value)
	}

  return (
		<Layout editor>
			<div className={styles.container}>
					{mount && 
						<SimpleMDEReact
							className={styles.editor}
							value={text}
							onChange={updateText}
							options={{
								spellChecker: true,
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
						/>
					}
					<div className={`${styles.preview} markdown-body`}>
						<ReactMarkdown 
							plugins={[gfm]}
							renderers={CodeBlock}
						>
						{text}
						</ReactMarkdown>
					</div>
			</div>
		</Layout>
  )
} 


