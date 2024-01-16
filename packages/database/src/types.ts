import { Database as DatabaseSchema } from './generated-types'
import { SupabaseClient } from '@supabase/supabase-js'

export interface DatabaseOptions {
    host: string
    key: string
}

export type DatabaseRepository = SupabaseClient<DatabaseSchema>

export type { DatabaseSchema }
