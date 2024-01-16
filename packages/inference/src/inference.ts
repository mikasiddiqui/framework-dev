import { OpenAI } from './providers'

export interface InferenceOptions {
    openai: {
        key: string
    }
}

export class Inference {
    public openai: OpenAI

    constructor({ openai }: InferenceOptions) {
        this.openai = new OpenAI({
            ...openai,
        })
    }
}
