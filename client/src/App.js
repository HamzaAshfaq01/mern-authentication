import React, { useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import Routes from './routes/index';
import { clearMessage } from './redux/actions/message/message_action';
function App() {
	const dispatch = useDispatch();
	const message = useSelector((state) => state.message.message);
	useEffect(() => {
		if (message) {
			toast.info(message);
		}
		return () => {
			dispatch(clearMessage());
		};
	}, [message]);
	return (
		<>
			<ToastContainer
				className='notification'
				limit={1}
				position='top-right'
				autoClose={2500}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss={false}
				draggable
				pauseOnHover={false}
			/>
			<Routes />
		</>
	);
}

export default App;
