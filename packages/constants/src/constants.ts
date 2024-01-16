export const Routes = {
    app: {
        root: '/',
        any: '*',

        auth: {
            signIn: '/sign-in',
            signOut: '/sign-out',
        },

        settings: '/settings',

        chat: {
            base: '/chat',
            key: 'chat',
        },

        assets: {
            logo: '/logo.svg',
            brand: '/brand.svg',
            favicon: '/favicon.svg',
        },
    },
} as const
