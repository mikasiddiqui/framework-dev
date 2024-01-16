import { rpc } from '../rpc'

export const mock = rpc.router({
    chat: rpc.procedure.query(async ({ input, ctx: { database, inference } }) => {
        return ''
    }),
})
