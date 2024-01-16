import { Inference } from '@framework/inference'
import { settings } from '@framework/settings'

export default async function handler(req: Request, res: Response) {
    const { inference } = settings()

    const payload = await req.json()
    const messages = (payload?.messages || []) as unknown as { role: 'user' | 'system'; content: string }[]

    const models = new Inference({ openai: { key: inference.openai.key } })

    return models.openai.stream('gpt-3.5-turbo', messages, [])
}

export const config = {
    runtime: 'edge',
}
