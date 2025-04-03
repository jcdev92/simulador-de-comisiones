import { useStore } from '@tanstack/react-store';
import { messageStore } from '../../stores/messageStore';

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
                return 'text-green-600';
            case 'error':
                return 'text-red-600';
            case 'info':
                return 'text-blue-600';
            default:
                return 'text-black';
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className={`bg-white p-4 rounded-lg shadow-lg text-center ${getMessageStyle()}`}>
                {message.text}
            </div>
        </div>
    );
};
