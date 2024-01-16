import { TRPCError } from '@trpc/server'
import { rpc } from '../rpc'

export const authentication = rpc.middleware(async ({ ctx, next }) => {
    if (!ctx.database) {
        throw new TRPCError({
            code: 'INTERNAL_SERVER_ERROR',
            message: 'Ensure you have provided the correct database credentials.',
            cause: 'No database instance found.',
        })
    }

    if (!ctx.logger) {
        throw new TRPCError({
            code: 'INTERNAL_SERVER_ERROR',
            message: 'Logging module failed to load',
            cause: 'No logging module found.',
        })
    }

    if (!ctx.token) {
        throw new TRPCError({
            code: 'FORBIDDEN',
            message: 'No authentication token provided.',
            cause: 'No authentication token received to middleware.',
        })
    }

    if (!ctx.inference) {
        throw new TRPCError({
            code: 'FORBIDDEN',
            message: 'No inference service provided.',
            cause: 'No inference service received to middleware.',
        })
    }

    const session = await ctx.database.respository.auth.getUser(ctx.token)

    if (session.error) {
        throw new TRPCError({
            code: 'FORBIDDEN',
            message: 'Invalid authentication token provided.',
            cause: `Invalid authentication token: ${ctx.token} received to middleware.`,
        })
    }

    const profile = await ctx.database.respository.from('profile').select('*').eq('id', session.data.user.id).single()

    if (profile.error) {
        throw new TRPCError({
            code: 'BAD_REQUEST',
            message: `Error while trying to get the profile for user`,
            cause: `Error while trying to get the profile for user: ${session.data.user.id}`,
        })
    }

    return next({
        ctx: {
            ...ctx,
            database: ctx.database,
            logger: ctx.logger,
            inference: ctx.inference,
        },
    })
})

export const administraded = rpc.middleware(async ({ ctx, next }) => {
    return next()
})
