import React, { useMemo } from 'react'
import { Outlet } from 'react-router-dom'
import { Button } from '../button'
import { Icon } from '../icon'

import { useClientSideRouter } from '@framework/app/hooks'

export interface LayoutProps {}

export const Layout: React.FC<LayoutProps> = () => {
    const { routes, location } = useClientSideRouter()

    const minimal = useMemo(() => {
        const whitelist: string[] = [routes.app.root, routes.app.auth.signIn, routes.app.auth.signOut]
        return whitelist.includes(location.pathname as string)
    }, [routes, location])

    if (minimal) return <Outlet />

    return (
        <div className="flex flex-row">
            <div className="bg-zinc-950 h-screen p-3">
                <div className="flex flex-col h-full justify-between">
                    <div className="flex flex-col justify-center align-middle items-center">
                        <Button className="mb-3" size="icon">
                            <Icon type="logo" className="h-4 w-4" />
                        </Button>
                    </div>

                    <div className="flex flex-col justify-center align-middle items-center h-full">
                        <Button className="mb-3" variant="default" size="icon">
                            <Icon type="dashboard" className="h-4 w-4" />
                        </Button>
                        <Button className="mb-3" variant="default" size="icon">
                            <Icon type="chat" className="h-4 w-4" />
                        </Button>
                        <Button className="mb-3" variant="default" size="icon">
                            <Icon type="star" className="h-4 w-4" />
                        </Button>
                    </div>

                    <div className="flex flex-col justify-center align-middle items-center">
                        <Button className="mb-3" variant="default" size="icon">
                            <Icon type="notification" className="h-4 w-4" />
                        </Button>
                        <Button variant="default" size="icon">
                            <Icon type="settings" className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </div>
            <div className="p-6 w-full max-h-screen">
                <Outlet />
            </div>
        </div>
    )
}
