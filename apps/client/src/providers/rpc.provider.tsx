/* eslint-disable turbo/no-undeclared-env-vars */
import React, { useMemo } from 'react'
import superjson from 'superjson'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { httpBatchLink } from '@trpc/client'
import { useSession } from '@supabase/auth-helpers-react'
import { rpc } from '@framework/app/helpers'

export interface RpcProviderProps {
    children: JSX.Element | JSX.Element[]
}

export const RpcProvider: React.FC<RpcProviderProps> = ({ children }) => {
    const session = useSession()

    const querier = useMemo(() => {
        return new QueryClient({
            defaultOptions: {
                queries: {
                    refetchOnWindowFocus: false,
                    refetchOnMount: false,
                    refetchOnReconnect: false,
                    retry: 3,
                },
            },
        })
    }, [])

    const client = useMemo(() => {
        const endpoint = () => {
            if (typeof window !== 'undefined') {
                return `http://localhost:${process.env.PORT ?? 3000}`
            }

            if (process.env.VERCEL_URL) {
                return `https://${process.env.VERCEL_URL}`
            }

            if (process.env.RENDER_INTERNAL_HOSTNAME) {
                return `http://${process.env.RENDER_INTERNAL_HOSTNAME}:${process.env.PORT}`
            }

            return `http://localhost:${process.env.PORT ?? 3000}`
        }

        return rpc.createClient({
            transformer: superjson,
            links: [
                httpBatchLink({
                    url: `${endpoint()}/api`,

                    headers() {
                        return {
                            Authorization: session?.access_token,
                        }
                    },
                }),
            ],
        })
    }, [session])

    return (
        <rpc.Provider client={client} queryClient={querier}>
            <QueryClientProvider client={querier}>{children}</QueryClientProvider>
        </rpc.Provider>
    )
}
