// importing css
import './MessageContainer.css';

// importing components
import { useState } from 'react';

// importing custom components
import Heading from '../Heading/Heading';
import FriendBox from '../FriendBox/FriendBox';
import MessageBox from '../MessageBox/MessageBox';

// message container component
export default function MessageContainer() {
	// state
	const [currentBrick, setCurrentBrick] = useState(null);

	return (
		<div className="messageContainer box-container md:w-4/5 rounded-md">
			{/* header */}
			<div className="messageContainer-header mb-5">
				<Heading
					sticker="/assets/messages1.png"
					heading="Messages"
					subheading="Message with your friends"
				/>
			</div>

			{/* message section */}
			<div className="messageContainer-section flex">
				{/* friend box */}
				<div className="messageContainer-section-friendBox md:w-2/5">
					<FriendBox
						currentBrick={currentBrick}
						setCurrentBrick={setCurrentBrick}
					/>
				</div>

				{/* message box */}
				<div className="messageContainer-section-messageBox hidden md:block md:w-3/5">
					<MessageBox currentBrick={currentBrick} />
				</div>
			</div>
		</div>
	);
}
