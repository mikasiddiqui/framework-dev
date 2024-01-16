import React from 'react'
import { BrowserRouter, Routes as ReactRouterRoutes, Route } from 'react-router-dom'

import { Layout } from '@framework/app/components'
import { Root, SignIn, SignOut, Chat } from '@framework/app/views'
import { RpcProvider, HelmetProvider } from '@framework/app/providers'

import { Routes } from '@framework/constants'

export interface AppProps {}

export const App: React.FC<AppProps> = () => {
    const { app } = Routes

    return (
        <RpcProvider>
            <HelmetProvider>
                <BrowserRouter>
                    <ReactRouterRoutes>
                        <Route element={<Layout />}>
                            <Route path={app.root} element={<Root />} />
                            <Route path={app.auth.signIn} element={<SignIn />} />
                            <Route path={app.auth.signOut} element={<SignOut />} />
                            <Route path={app.chat.base} element={<Chat />} />
                        </Route>
                    </ReactRouterRoutes>
                </BrowserRouter>
            </HelmetProvider>
        </RpcProvider>
    )
}

export default App
