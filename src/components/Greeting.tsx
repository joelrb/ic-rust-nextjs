import {
  Box,
  Button,
  Code,
  Container,
  Flex,
  Heading,
  Text,
  TextFieldInput
} from "@radix-ui/themes"
import React, { useState } from "react"
import { useActorMethod } from "service/hello"

interface GreetingProps {}

const Greeting: React.FC<GreetingProps> = ({}) => {
  const { call, data, error, loading } = useActorMethod("greet")

  const [name, setName] = useState("")

  function onChangeName(e: React.ChangeEvent<HTMLInputElement>) {
    const newName = e.target.value
    setName(newName)
  }

  return (
    <Container size="1">
      <Box p="2">
        <Heading size="5">Greeting</Heading>
        <Flex>
          <TextFieldInput
            id="name"
            alt="Name"
            type="text"
            value={name}
            onChange={onChangeName}
          />
          <Button onClick={() => call(name)}>Send</Button>
        </Flex>
        <Text size="1">
          This component calls the <Code>greet</Code> method on the{" "}
          <Code>hello</Code> actor.
        </Text>
      </Box>
      <Box>
        {loading && <Text>Loading...</Text>}
        {error ? <Text>Error: {JSON.stringify(error)}</Text> : null}
        {data && <Text>Message: {JSON.stringify(data)}</Text>}
      </Box>
    </Container>
  )
}

export default Greeting
