import React, { useEffect } from 'react'

import { useClientSideRouter } from '@framework/app/hooks'

export interface RootProps {}

export const Root: React.FC<RootProps> = () => {
    const { navigate, routes, location } = useClientSideRouter()

    useEffect(() => {
        setTimeout(() => {
            const query = new URLSearchParams(location.search)
            const redirect = query.get('redirect')

            navigate(redirect ? redirect : routes.app.auth.signIn)
        }, 300)
    }, [navigate, location, routes])

    return <div>test</div>
}
