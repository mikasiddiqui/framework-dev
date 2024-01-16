import dotenv from 'dotenv'
import find from 'find-config'

export const bootstrap = () => {
    dotenv.config({ path: find('.env') ?? undefined })
}
