import superjson from 'superjson'
import { initTRPC, inferAsyncReturnType } from '@trpc/server'
import { createContextInner } from './context'

export type Context = inferAsyncReturnType<typeof createContextInner>

export const rpc = initTRPC.context<Context>().create({
    transformer: superjson,
    errorFormatter({ shape }) {
        return shape
    },
})
