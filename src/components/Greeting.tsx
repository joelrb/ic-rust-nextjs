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
import { useQueryCall } from "service/hello"

interface GreetingProps {}

const Greeting: React.FC<GreetingProps> = ({}) => {
  const [name, setName] = useState("")

  const { call, data, error, loading } = useQueryCall({
    functionName: "greet",
    args: [name],
    refetchOnMount: false
  })

  function onChangeName(e: React.ChangeEvent<HTMLInputElement>) {
    const newName = e.target.value
    setName(newName)
  }

  return (
    <Container size="1">
      <Heading size="5">Greeting</Heading>
      <Flex>
        <TextFieldInput
          id="name"
          alt="Name"
          type="text"
          placeholder="Name"
          value={name}
          onChange={onChangeName}
        />
        <Button type="button" onClick={call}>
          Send
        </Button>
      </Flex>
      <Text size="1">
        This component calls the <Code>greet</Code> method on the{" "}
        <Code>hello</Code> actor.
      </Text>
      <Box>
        {loading ? (
          <Text>Loading...</Text>
        ) : error ? (
          <Text color="red">Error: {JSON.stringify(error)}</Text>
        ) : data ? (
          <Text>{data}</Text>
        ) : null}
      </Box>
    </Container>
  )
}

export default Greeting
