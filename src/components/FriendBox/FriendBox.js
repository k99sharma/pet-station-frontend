// importing components
import { Typography } from '@mui/material';
import { useQuery } from 'react-query';
import { useContext } from 'react';
import UserAvatar from '../UserAvatar/UserAvatar';

// importing context
import AuthContext from '../../context/auth';

// importing helper functions
import { getUserFriend } from '../../utilities/helper';

// friend brick component
function FriendBrick(props) {
	// props
	const { friend, currentBrick, setCurrentBrick } = props;

	// function to select receiver
	const handleClick = () => {
		const { userId } = friend;
		setCurrentBrick(userId);
	};

	return (
		// eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
		<div
			onClick={handleClick}
			className={`friendBrick h-22 p-3 cursor-pointer flex ${
				currentBrick === friend.userId
					? 'bg-gradient-to-b from-blue-300 to-blue-400 rounded-lg'
					: ''
			}`}
		>
			{/* content */}
			<div className="friendBrick-content flex items-center w-4/5">
				<div className="friendBrick-content-avatar">
					{/* avatar */}
					<UserAvatar
						profilePictureUrl={friend.profilePictureUrl}
						name={friend.name}
						height={50}
						width={50}
					/>
				</div>

				<div className="friendBrick-content-title mx-3">
					{/* label */}
					<Typography variant="h6" className="friendBrick-content-title-label">
						{friend.name}
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
	const { currentBrick, setCurrentBrick } = props;
	const authCtx = useContext(AuthContext);

	// fetch data
	const { isLoading, error, data } = useQuery('friends', () =>
		getUserFriend(authCtx.token)
	);

	if (isLoading) return <div>Loading ...</div>;

	if (error) return <div>error</div>;

	return (
		<div className="friendBox overflow-auto p-2 h-full w-full">
			{data.data.friends.map((friend) => (
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
