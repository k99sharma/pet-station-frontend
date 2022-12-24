// importing components
import { Typography } from '@mui/material';
import UserAvatar from '../UserAvatar/UserAvatar';

// friend brick component
function FriendBrick(props) {
	// props
	const { friend, currentBrick, setCurrentBrick } = props;

	// function to select receiver
	const handleClick = () => {
		const { userId } = friend;

		console.log(`User selected is ${userId}`);
		setCurrentBrick(userId);
	};

	return (
		// eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
		<div
			onClick={handleClick}
			className={`friendBrick h-22 p-3 cursor-pointer flex ${
				currentBrick === friend.userId
					? 'bg-gradient-to-b from-blue-300 to-blue-500 rounded-lg'
					: ''
			}`}
		>
			{/* content */}
			<div className="friendBrick-content flex items-center w-4/5">
				<div className="friendBrick-content-avatar">
					{/* avatar */}
					<UserAvatar
						profilePictureUrl={friend.profilePictureUrl}
						name={friend.label}
						height={50}
						width={50}
					/>
				</div>

				<div className="friendBrick-content-title mx-3">
					{/* label */}
					<Typography variant="h6" className="friendBrick-content-title-label">
						{friend.label}
					</Typography>

					{/* last message */}
					<div className="friendBrick-content-title-message text-sm truncate-text">
						{friend.lastMessage}
					</div>
				</div>
			</div>

			{/* time */}
			<div className="friendBrick-time text-xs font-bold w-1/5">
				{friend.time}
			</div>
		</div>
	);
}

// friend box component
export default function FriendBox(props) {
	// props
	const { currentBrick, setCurrentBrick, friends } = props;

	return (
		<div className="friendBox overflow-auto p-2 h-full w-full">
			{friends.map((friend) => (
				<FriendBrick
					key={friend.userId}
					currentBrick={currentBrick}
					friend={friend}
					setCurrentBrick={setCurrentBrick}
				/>
			))}
		</div>
	);
}
