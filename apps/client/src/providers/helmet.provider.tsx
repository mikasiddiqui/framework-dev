import { FC } from 'react'
import { HelmetProps, HelmetProvider as AsyncHelmetProvider } from 'react-helmet-async'

export interface HelmetProviderProps extends HelmetProps {
    children: JSX.Element | JSX.Element[]
}

export const HelmetProvider: FC<HelmetProviderProps> = ({ children, ...rest }) => {
    return <AsyncHelmetProvider {...rest}>{children}</AsyncHelmetProvider>
}
