import { fetchRequestHandler } from '@trpc/server/adapters/fetch'
import { NextRequest } from 'next/server'

import { Inference } from '@framework/inference'

import { Database } from '@framework/database'
import { Logger } from '@framework/logger'
import { router } from '@framework/rpc'
import { settings } from '@framework/settings'

export const createRPCContext = (req: NextRequest) => {
    const { database, development, instance, inference } = settings()

    return {
        logger: new Logger({ environment: development ? 'development' : 'production', pkg: 'monorepo', repository: 'client', instance }),
        database: new Database({ host: database.host, key: database.key }),
        inference: new Inference({ openai: { key: inference.openai.key } }),
        token: req.headers.get('authorization') ?? '',
    }
}

export const config = {
    runtime: 'edge',
    unstable_allowDynamic: ['**/node_modules/function-bind/**'],
}

export default async function handler(req: NextRequest) {
    return fetchRequestHandler({
        endpoint: '/api',
        router,
        req,
        createContext: () => createRPCContext(req),
    })
}
