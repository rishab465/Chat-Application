import { useState } from "react";
import { BsSend } from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage";
import { useSocketContext } from "../../context/SocketContext";
import useConversation from "../../zustand/useConversation";

const MessageInput = () => {
	const [message, setMessage] = useState("");
	const { loading, sendMessage } = useSendMessage();
	const { socket } = useSocketContext();
	const { selectedConversation, isTyping } = useConversation();

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!message) return;
		await sendMessage(message);
		setMessage("");
		if (socket && selectedConversation) {
			socket.emit("typing", { receiverId: selectedConversation._id, isTyping: false });
		}
	};

	const handleChange = (e) => {
		const value = e.target.value;
		setMessage(value);
		if (socket && selectedConversation) {
			socket.emit("typing", { receiverId: selectedConversation._id, isTyping: value.length > 0 });
		}
	};

	return (
		<form className='px-4 py-3 border-t border-slate-800 bg-slate-900/80' onSubmit={handleSubmit}>
			<div className='w-full relative'>
				<input
					type='text'
					className='border text-sm rounded-full block w-full ps-4 pe-10 py-2.5 bg-slate-800 border-slate-700 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-sky-500 shadow-inner shadow-black/40'
					placeholder='Type a message...'
					value={message}
					onChange={handleChange}
				/>
				<button
					type='submit'
					className='absolute inset-y-0 end-0 flex items-center pe-3 text-sky-400 hover:text-sky-300'
				>
					{loading ? <div className='loading loading-spinner'></div> : <BsSend />}
				</button>
			</div>
			{isTyping && (
				<p className='mt-1 text-xs text-slate-400 ps-4'>Typing...</p>
			)}
		</form>
	);
};
export default MessageInput;

// STARTER CODE SNIPPET
// import { BsSend } from "react-icons/bs";

// const MessageInput = () => {
// 	return (
// 		<form className='px-4 my-3'>
// 			<div className='w-full'>
// 				<input
// 					type='text'
// 					className='border text-sm rounded-lg block w-full p-2.5  bg-gray-700 border-gray-600 text-white'
// 					placeholder='Send a message'
// 				/>
// 				<button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3'>
// 					<BsSend />
// 				</button>
// 			</div>
// 		</form>
// 	);
// };
// export default MessageInput;
