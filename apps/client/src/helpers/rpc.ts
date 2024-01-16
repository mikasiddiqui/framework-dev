import { createTRPCReact } from '@trpc/react-query'
import type { AppRouter } from '@framework/rpc'

export const rpc = createTRPCReact<AppRouter>()
