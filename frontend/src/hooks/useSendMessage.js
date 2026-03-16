import { useMemo, useState } from "react";
import useConversation from "../zustand/useConversation";
import toast from "react-hot-toast";
import sendSound from "../assets/sounds/notification.mp3";

const useSendMessage = () => {
	const [loading, setLoading] = useState(false);
	const { setMessages, selectedConversation } = useConversation();
	const audio = useMemo(() => (typeof Audio !== "undefined" ? new Audio(sendSound) : null), []);

	const sendMessage = async (message) => {
		setLoading(true);
		try {
			const res = await fetch(`/api/messages/send/${selectedConversation._id}`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ message }),
			});
			const data = await res.json();
			if (data.error) throw new Error(data.error);

			setMessages((prevMessages) => [...prevMessages, data]);
			if (audio) {
				audio.currentTime = 0;
				audio.play().catch(() => {});
			}
		} catch (error) {
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	};

	return { sendMessage, loading };
};
export default useSendMessage;
