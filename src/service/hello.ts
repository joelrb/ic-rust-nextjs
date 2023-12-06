"use client"
import createReActor from "@ic-reactor/react"
import { canisterId, createActor } from "declarations/hello"

export const {
  ReActorProvider,
  initialize,
  useInitialized,
  useReActor,
  useActorState,
  useAuthClient,
  useQueryCall,
  useUpdateCall
} = createReActor(agent =>
  createActor(canisterId, {
    agent
  })
)
