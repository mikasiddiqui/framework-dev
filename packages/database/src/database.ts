import { createClient } from '@supabase/supabase-js'
import type { DatabaseRepository, DatabaseOptions, DatabaseSchema } from './types'

export class Database {
    public respository: DatabaseRepository

    constructor({ host, key }: DatabaseOptions) {
        this.respository = createClient<DatabaseSchema>(host, key)
    }
}
