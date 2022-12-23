// importing components
import { Avatar } from '@mui/material';

// Avatar component
export default function UserAvatar(props) {
	// deconstructing props
	const { profilePictureUrl, name } = props;

	return (
		<div className="avatar">
			{profilePictureUrl === null ? (
				<Avatar sx={{ width: 60, height: 60 }}>{name.charAt(0)}</Avatar>
			) : (
				<Avatar
					sx={{ width: 60, height: 60 }}
					src={profilePictureUrl}
					alt={name}
				/>
			)}
		</div>
	);
}
