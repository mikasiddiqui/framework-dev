/* eslint-disable turbo/no-undeclared-env-vars */
export const settings = () => {
    return {
        instance: process.env.INSTANCE_ID || 'unassigned',
        development: process.env.NODE_ENV !== 'production',

        database: {
            host: process.env.NEXT_PUBLIC_SUPABASE_URL || '',
            token: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '',
            key: process.env.SUPABASE_SERVICE_KEY || '',
        },

        inference: {
            openai: {
                key: process.env.OPENAI_API_KEY || '',
            },
        },
    }
}
