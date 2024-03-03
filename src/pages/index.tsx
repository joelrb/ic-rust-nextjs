import Head from "next/head"

import styles from "styles/Home.module.css"

import Image from "next/image"
import Login from "components/Login"
import AddName from "components/AddName"
import { useQueryCall } from "service/hello"

function HomePage() {
  const { call, data, loading, error } = useQueryCall({
    functionName: "get_name"
  })

  return (
    <div className={styles.container}>
      <Head>
        <title>Internet Computer</title>
      </Head>
      <main className={styles.main}>
        <h3 className={styles.title}>
          Welcome to the Internet Computer starter template
        </h3>
        <Login getName={call} />
        <div className={styles.name}>
          {loading ? (
            <span>Loading...</span>
          ) : error ? (
            <span>{error.message}</span>
          ) : data ? (
            <span>Hello {data[0]}!</span>
          ) : null}
        </div>
        <AddName getName={call} />
      </main>
      <footer className={styles.footer}>
        <a
          href="https://internetcomputer.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            width={140}
            height={30}
            src="/icp-logo.svg"
            alt="DFINITY logo"
            className={styles.logo}
          />
        </a>
      </footer>
    </div>
  )
}

export default HomePage
