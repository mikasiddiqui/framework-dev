import { useState, useEffect } from 'react'

import { createPagesBrowserClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider } from '@supabase/auth-helpers-react'

import { Inter } from '@next/font/google'

import { cn } from '@framework/app/helpers'

import type { AppProps } from 'next/app'

import '@framework/app/styles/global.css'

const font = Inter({
    subsets: ['latin'],
    variable: '--font-sans',
})

const App = ({ Component, pageProps }: AppProps<{}>) => {
    const [render, setRender] = useState(false)
    const [client] = useState(() => createPagesBrowserClient())

    useEffect(() => setRender(true), [])

    if (!render) {
        return null
    }

    return (
        <>
            <style jsx global>
                {`
                    :root {
                        --font-sans: ${font.variable};
                    }
                `}
            </style>

            <main className={cn('min-h-screen bg-zinc-950 font-sans antialiased', font.variable)} style={{ background: '#020202' }}>
                <SessionContextProvider supabaseClient={client}>
                    <Component {...pageProps} />
                </SessionContextProvider>
            </main>
        </>
    )
}

export default App
