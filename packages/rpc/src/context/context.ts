import type { Database } from '@framework/database'
import type { Logger } from '@framework/logger'
import type { Inference } from '@framework/inference'

export interface CreateContextOptions {
    token: string
    database: Database
    logger: Logger
    inference: Inference
}

/**
 * Inner function for `createContext` where we create the context.
 * This is useful for testing when we don't want to mock Next.js' request/response
 */
export async function createContextInner(_opts: Partial<CreateContextOptions>) {
    return { ..._opts }
}
