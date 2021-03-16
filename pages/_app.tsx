import '../styles/global.scss'
import 'highlight.js/styles/default.css'
import 'github-markdown-css'
import "easymde/dist/easymde.min.css"

import { AppProps } from 'next/app'
import { Provider } from 'next-auth/client'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider session={pageProps.session}>
      <Component {...pageProps} />
    </Provider>
  )
}
