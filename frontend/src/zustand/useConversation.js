import { create } from "zustand";

const useConversation = create((set) => ({
	selectedConversation: null,
	setSelectedConversation: (selectedConversation) => set({ selectedConversation }),
	messages: [],
	// accepts either an array or an updater function
	setMessages: (update) =>
		set((state) => ({
			messages: typeof update === "function" ? update(state.messages) : update,
		})),
	isTyping: false,
	setIsTyping: (isTyping) => set({ isTyping }),
}));

export default useConversation;
