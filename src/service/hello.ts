import { createReactor } from "@ic-reactor/react"
import { canisterId, idlFactory, hello } from "declarations/hello"

export type Hello = typeof hello

export const {
  initialize,
  useAuth,
  useQueryCall,
  useUpdateCall,
  useActorState
} = createReactor<Hello>({
  canisterId,
  idlFactory,
  withProcessEnv: true
})
