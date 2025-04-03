import { Store } from '@tanstack/store';

export interface MessageState {
  message: { text: string; type: 'success' | 'error' | 'info' | 'default' } | null;
}

const initialState: MessageState = { message: null };

export const messageStore = new Store(initialState);

export function setMessage(message: { text: string; type: 'success' | 'error' | 'info' | 'default' }) {
  messageStore.setState((prevState) => ({ ...prevState, message }));
}

export function clearMessage() {
  messageStore.setState((prevState) => ({ ...prevState, message: null }));
}

export function useMessagetore() {
  return messageStore.setState((prevState) => prevState);
}