import { createReactor } from "@ic-reactor/react"
import { canisterId, idlFactory, hello } from "declarations/hello"

export const { useQueryCall, useAuth } = createReactor<typeof hello>({
  canisterId,
  idlFactory,
  withLocalEnv: true
})
