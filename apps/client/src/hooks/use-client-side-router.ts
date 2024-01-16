import { useMemo } from 'react'
import { useNavigate, useLocation, useParams } from 'react-router-dom'
import { Routes } from '@framework/constants'

export const useClientSideRouter = () => {
    const routes = Routes

    const router = useLocation()
    const push = useNavigate()
    const parameters = useParams()

    const navigate = (path: string, external = false) => {
        if (external) {
            window.open(path, '_blank')
            return
        } else {
            push(path)
        }
    }

    const back = () => {
        push(-1)
    }

    const location = useMemo(() => router, [router])

    return {
        navigate,
        location,
        routes,
        parameters,
        back,
    }
}
