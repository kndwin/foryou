import React, { useState } from "react";
import SimpleMDEReact from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import 'github-markdown-css'
import styles from './editor.module.scss'
import micromark from 'micromark'


export default function Editor() {
  const onLoadText: string = `# Hey Parm! check out this header!
## And this one! 
Some boring random text
1. Some numbered list! 
2. Another one! 
- bullet points! 
- another one! 
|I can do tables too!| pretty coool|
|---|---|
|I think| it's cool|

\`some inline code\` 

~~~ 
some block code!
~~~

![](https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)
  `
  const [text, setText] = useState<string>(onLoadText)

  return (
    <div className={styles.container}>
      <h1>Editor</h1>
      <SimpleMDEReact
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
      <h1>Rendered Markdown</h1>
      <div className={`markdown-body`}>
        <ReactMarkdown 
          plugins={[gfm]}
          children={text} 
          allowDangerousHtml={true}
        />
      </div>
      <h1>Raw markdown</h1>
      <div>
        {text}
      </div>
      <h1>Raw html</h1>
      <div>
        {micromark(text)}
      </div>
    </div>
  )
} 


