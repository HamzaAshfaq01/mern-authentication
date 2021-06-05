import Loader from 'react-loader-spinner';

function Loading() {
	return (
		<Loader
			type='ThreeDots'
			color='white'
			height={40}
			width={40}
			className='loader'
		/>
	);
}

export default Loading;
