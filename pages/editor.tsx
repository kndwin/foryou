import React, { useState } from "react";
import SimpleMDEReact from "react-simplemde-editor";
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import styles from './editor.module.scss'
import 'github-markdown-css'
import "easymde/dist/easymde.min.css";

export default function Editor() {

  const [text, setText] = useState<string>("")

  return (
    <div className={styles.container}>
      <SimpleMDEReact
        className={styles.editor}
        value={text}
        onChange={(value: string) => setText(value)}
        options={{
          spellChecker: false,
            toolbar: [
              'heading-1','heading-2','heading-3','|',
              'code','italic','bold','|',
              'unordered-list','ordered-list','image'
            ]
        }}
      />
      <div className={`markdown-body`}>
        <ReactMarkdown 
          plugins={[gfm]}
          children={text} 
          allowDangerousHtml={true}
        />
      </div>
    </div>
  )
} 


