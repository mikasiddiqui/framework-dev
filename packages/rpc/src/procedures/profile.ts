import { TRPCError } from '@trpc/server'
import { z } from 'zod'

import { rpc } from '../rpc'
import { authentication } from '../middleware'

export const profile = rpc.router({
    get: rpc.procedure
        .use(authentication)
        .input(z.object({ id: z.string().uuid() }))
        .query(async ({ input, ctx: { database } }) => {
            const profile = await database.respository.from('profile').select('*').eq('id', input.id).single()

            if (profile.error) {
                throw new TRPCError({
                    message: `Error while trying to get the profile for user`,
                    code: 'BAD_REQUEST',
                })
            }

            return profile.data
        }),
})
