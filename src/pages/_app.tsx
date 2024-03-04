import { Theme } from "@radix-ui/themes"
import "@radix-ui/themes/styles.css"
import { AppProps } from "next/app"
import React from "react"

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Theme>
      <Component {...pageProps} />
    </Theme>
  )
}

export default App
