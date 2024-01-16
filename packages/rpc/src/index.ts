import { rpc } from './rpc'
import { profile, mock } from './procedures'

export type AppRouter = typeof router

export const router = rpc.router({
    profile,
    mock,
})

export * from './context'
