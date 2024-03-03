import { createReactor } from "@ic-reactor/react"
import { canisterId, idlFactory, todo } from "declarations/todo"

export type Todo = typeof todo

export const { useAuth, useQueryCall, useUpdateCall } = createReactor<Todo>({
  canisterId,
  idlFactory,
  withProcessEnv: true
})
