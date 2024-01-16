import GPT from 'openai'
import { OpenAIStream, StreamingTextResponse } from 'ai'

import type { ChatCompletionMessageParam, ChatCompletionCreateParams } from 'openai/resources/chat'
import type { Stream } from 'openai/streaming'

export type OpenAIModel = 'gpt-3.5-turbo-1106' | 'gpt-4' | 'gpt-3.5-turbo'

export class OpenAI {
    private readonly client: GPT

    constructor({ key }: { key: string }) {
        this.client = new GPT({
            apiKey: key,
        })
    }

    private request(model: OpenAIModel, messages: ChatCompletionMessageParam[], functions: ChatCompletionCreateParams.Function[], stream = false) {
        return this.client.chat.completions.create({
            model,
            stream,
            messages,
            functions: functions.length === 0 ? undefined : functions,
        })
    }

    public async stream(model: OpenAIModel, messages: ChatCompletionMessageParam[], functions: ChatCompletionCreateParams.Function[]) {
        const response = await this.request(model, messages, functions, true)
        const stream = OpenAIStream(response as Stream<GPT.Chat.Completions.ChatCompletionChunk>)

        return new StreamingTextResponse(stream)
    }
}
