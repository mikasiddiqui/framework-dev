import time from 'dayjs'
import rt from 'dayjs/plugin/relativeTime'

time.extend(rt)

export const now = () => new Date().toISOString()

export const utc = (time?: number) => {
    const stamp = new Date()
    return new Date(time || stamp.getTime() + stamp.getTimezoneOffset() * 60000)
}
