import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { ghcolors  } from 'react-syntax-highlighter/dist/cjs/styles/prism'

export const CodeBlock = {
	code: ({
		language, 
		value 
	}: {
		language?: string
		value?: string
	}) => {
		var newCode = value
		return (
			<SyntaxHighlighter language={language} styles={ghcolors}>
				{newCode || ""}
			</SyntaxHighlighter>
		)
	}
} 
