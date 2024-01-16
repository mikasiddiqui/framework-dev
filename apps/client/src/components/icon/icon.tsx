import React from 'react'
import { IoChatbubbles, IoStar, IoSettings, IoNotifications, IoGrid, IoPrism } from 'react-icons/io5'

export interface IconProps {
    type: 'chat' | 'star' | 'notification' | 'settings' | 'dashboard' | 'logo'
    className?: string
}

export const Icon: React.FC<IconProps> = ({ type, className }) => {
    switch (type) {
        case 'logo': {
            return <IoPrism className={className} />
        }

        case 'chat': {
            return <IoChatbubbles className={className} />
        }

        case 'star': {
            return <IoStar className={className} />
        }

        case 'notification': {
            return <IoNotifications className={className} />
        }

        case 'settings': {
            return <IoSettings className={className} />
        }

        case 'dashboard': {
            return <IoGrid className={className} />
        }

        default: {
            return <div />
        }
    }
}
