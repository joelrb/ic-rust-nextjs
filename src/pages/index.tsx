import Head from "next/head"

import { Box, Flex, Heading, Link, Separator } from "@radix-ui/themes"
import Greeting from "components/Greeting"
import Image from "next/image"

function HomePage() {
  return (
    <Box>
      <Head>
        <title>Internet Computer</title>
      </Head>
      <Flex justify="center" direction="column" gap="5">
        <Heading align="center">
          Welcome to the Internet Computer starter template
        </Heading>
        <Greeting />
        <Separator size="4" />
        <footer>
          <Flex justify="center">
            <Link
              href="https://internetcomputer.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                width={140}
                height={30}
                src="/icp-logo.svg"
                alt="DFINITY logo"
              />
            </Link>
          </Flex>
        </footer>
      </Flex>
    </Box>
  )
}

export default HomePage
