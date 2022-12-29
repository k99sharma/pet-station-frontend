// importing css
import './MessageContainer.css';

// importing components
import { useEffect, useState } from 'react';

// importing custom components
import Heading from '../Heading/Heading';
import FriendBox from '../FriendBox/FriendBox';
import MessageBox from '../MessageBox/MessageBox';

// importing friend list
import friends from '../../utilities/friendSeed';

// importing helper functions
import { setSocketSessionId } from '../../utilities/helper';

// importing socket
import socket from '../../websocket/socketio';

// message container component
export default function MessageContainer() {
	// state
	const [currentBrick, setCurrentBrick] = useState(null);

	useEffect(() => {
		// function to make socket connection
		function socketConnection() {
			socket.connect();

			socket.on('session', (res) => {
				const  { sessionId } = res;
				setSocketSessionId(sessionId);
			});
		}

		socketConnection(); // invoke socket connection
	}, []);

	return (
		<div className="messageContainer box-container md:w-4/5 rounded-2xl">
			{/* header */}
			<div className="messageContainer-header mb-5">
				<Heading
					sticker="/assets/messages1.png"
					heading="Messages"
					subheading="Message with your friends"
				/>
			</div>

			{/* message section */}
			<div className="messageContainer-section rounded-lg flex">
				{/* friend box */}
				<div className="messageContainer-section-friendBox w-full md:w-2/5">
					<FriendBox
						currentBrick={currentBrick}
						setCurrentBrick={setCurrentBrick}
						friends={friends}
					/>
				</div>

				{/* message box */}
				<div className="messageContainer-section-messageBox hidden md:flex md:items-center md:justify-center md:w-3/5">
					{currentBrick === null ? (
						<img
							className="messageContainer h-full"
							src="/assets/message1.gif"
							alt="svg"
						/>
					) : (
						<MessageBox currentBrick={currentBrick} />
					)}
				</div>
			</div>
		</div>
	);
}
