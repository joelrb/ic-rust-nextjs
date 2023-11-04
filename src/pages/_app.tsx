import { Theme } from "@radix-ui/themes"
import "@radix-ui/themes/styles.css"
import { AppProps } from "next/app"
import React from "react"
import { ReActorProvider } from "../service/hello"

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ReActorProvider>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </ReActorProvider>
  )
}

export default App
