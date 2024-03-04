import { createReactor } from "@ic-reactor/react"
import { canisterId, hello, idlFactory } from "declarations/hello"

export const { useQueryCall } = createReactor<typeof hello>({
  canisterId,
  idlFactory,
  withProcessEnv: true
})
