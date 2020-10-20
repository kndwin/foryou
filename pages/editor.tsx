import React, { useState } from "react";
import SimpleMDEReact from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'

export default function Editor() {
  const [text, setText] = useState<string>("Default")

  return (
    <>
      <SimpleMDEReact
        value={text}
        onChange={(value: string) => setText(value)}
      />
      <ReactMarkdown 
        plugins={[gfm]}
        children={text} 
      />
    </>
  )
} 


