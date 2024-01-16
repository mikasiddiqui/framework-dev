import React from 'react'
import { useChat } from 'ai/react'

import { Input, Button, Textarea } from '@framework/app/components'

export interface ChatProps {}

export const Chat: React.FC<ChatProps> = () => {
    const { messages, handleSubmit, input, handleInputChange } = useChat()

    return (
        <form onSubmit={handleSubmit} className="w-full h-full">
            <div style={{ height: 'calc(100% - 75px)', overflowY: 'auto', marginBottom: 10 }}>
                {messages.map((message, i) => (
                    <div key={i}>
                        <div className="mb-1 text-xs text-gray-500 font-semibold uppercase">{message.role}</div>
                        <div className="text-secondary mb-6 text-sm">{message.content}</div>
                    </div>
                ))}
            </div>

            <div style={{ height: 75 }}>
                <div className="flex items-center justify-center align-middle h-full">
                    <Textarea
                        className="w-full text-secondary"
                        placeholder="Say something"
                        name="prompt"
                        value={input}
                        onChange={handleInputChange}
                        id="input"
                    />
                    <Button className="ml-3" variant="outline" type="submit">
                        Send
                    </Button>
                </div>
            </div>
        </form>
    )
}
