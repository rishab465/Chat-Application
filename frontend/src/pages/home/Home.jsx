import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
	return (
		<div className='flex sm:h-[480px] md:h-[580px] w-full max-w-5xl rounded-3xl overflow-hidden bg-slate-900/70 border border-slate-700/60 shadow-2xl shadow-sky-900/40 backdrop-blur-xl'>
			<Sidebar />
			<MessageContainer />
		</div>
	);
};
export default Home;
