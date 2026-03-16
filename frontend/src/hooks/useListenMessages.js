import { useEffect } from "react";

import { useSocketContext } from "../context/SocketContext";
import useConversation from "../zustand/useConversation";

import notificationSound from "../assets/sounds/notification.mp3";

const useListenMessages = () => {
	const { socket } = useSocketContext();
	const { messages, setMessages, selectedConversation, setIsTyping } = useConversation();

	useEffect(() => {
		if (!socket) return;

		const handleNewMessage = (newMessage) => {
			newMessage.shouldShake = true;
			const sound = new Audio(notificationSound);
			sound.play();
			setMessages((prevMessages) => [...prevMessages, newMessage]);
		};

		const handleTyping = ({ senderId, isTyping }) => {
			if (selectedConversation && senderId === selectedConversation._id) {
				setIsTyping(isTyping);
			}
		};

		socket.on("newMessage", handleNewMessage);
		socket.on("typing", handleTyping);

		return () => {
			socket.off("newMessage", handleNewMessage);
			socket.off("typing", handleTyping);
		};
	}, [socket, setMessages, selectedConversation, setIsTyping]);
};
export default useListenMessages;
