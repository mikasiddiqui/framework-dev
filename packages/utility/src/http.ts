import ky from 'ky-universal'

import type { Options } from 'ky'

export const get = async <T>(url: string, options: Options): Promise<T> => {
    return await ky.get(url, { ...options }).json()
}

export const post = async <T>(url: string, options: Options): Promise<T> => {
    return await ky
        .post(url, {
            ...options,
        })
        .json()
}

export const head = async (url: string, options: Options) => {
    return await ky.head(url, {
        ...options,
    })
}

export const fetch = async (url: string, options: Options) => {
    return await ky(url, options)
}
