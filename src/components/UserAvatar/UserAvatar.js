// importing components
import { Avatar } from '@mui/material';

// Avatar component
export default function UserAvatar(props) {
    // deconstructing props
    const { profilePictureUrl, name } = props;

    return (
        <div className="avatar">
            {
                profilePictureUrl === null
                    ?
                    <Avatar
                        sx={{ width: 50, height: 50 }}
                    >
                        {
                            name.charAt(0)
                        }
                    </Avatar>
                    :
                    <Avatar
                        sx={{ width: 50, height: 50 }}
                        src={profilePictureUrl}
                        alt={name}
                    />
            }
        </div>
    );
}