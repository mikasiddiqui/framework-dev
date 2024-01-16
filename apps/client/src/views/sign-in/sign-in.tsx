import React from 'react'
import { rpc } from '@framework/app/helpers'
import { useChat } from 'ai/react'
export const SignIn = () => {
    const { messages, handleSubmit, input, handleInputChange } = useChat()
    return <div>sign in</div>
}
