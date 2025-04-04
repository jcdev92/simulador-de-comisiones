import React from 'react';
import { useStore } from '@tanstack/react-store';
import { messageStore, clearMessage } from '../../stores/messageStore';

type MessageType = 'success' | 'error' | 'info' | 'default';

interface Message {
    type: MessageType;
    text: string;
}

export const ModalMessage: React.FC = () => {
    const { message } = useStore<{ message: Message | null }>(messageStore);

    if (!message) return null;

    const getMessageStyle = (): string => {
        switch (message.type) {
            case 'success':
                return 'text-green-700';
            case 'error':
                return 'text-red-700';
            case 'info':
                return 'text-blue-700';
            default:
                return 'text-gray-700';
        }
    };

    const handleClose = () => {
        clearMessage();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-transparent backdrop-blur-md">
            <div className={`max-w-md w-full bg-white rounded-xl shadow-xl p-6 ${getMessageStyle()} text-center`}>
                <p className="text-xl font-semibold mb-4">{message.text}</p>
                <button
                    onClick={handleClose}
                    className="mt-2 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                    Cerrar
                </button>
            </div>
        </div>
    );
};