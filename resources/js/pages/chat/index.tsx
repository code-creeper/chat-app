'use client';

import { User } from '@/types';

interface Chat {
    id: number;
    user: {
        id: number;
        name: string;
    };
    lastMessage: {
        text: string;
        timestamp: string;
        isRead: boolean;
        senderId: number;
    };
    unreadCount: number;
}

interface ChatWindowProps {
    messages: {
        id: number;
        text: string;
        senderId: number;
        receiverId: number;
        createdAt: string;
    }[];
    user: User;
}

export default function ChatWindow({ messages, user }: ChatWindowProps) {
    console.log('ChatWindow messages:', messages);
    console.log('ChatWindow user:', user);
    
    return (
        <div className="flex h-full flex-col bg-white">
            {/* Header */}
            <div className="flex items-center gap-3 border-b border-gray-200 bg-white px-4 py-3">*</div>
        </div>
    );
}
