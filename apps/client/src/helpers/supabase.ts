import { createClient } from '@supabase/supabase-js'
import { settings } from '@framework/settings'

export const supabase = () => {
    const { database } = settings()

    return createClient(database.host, database.token)
}
