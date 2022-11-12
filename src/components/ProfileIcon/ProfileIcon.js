import './ProfileIcon.css'

// profile pic component
function ProfileIcon(_props) {
    const { height, width, user } = _props;

    return (
        <div className="profilePic">
            {
                user.image !== undefined && user.image !== null
                    ?
                    <img width={width} height={height} className="profilePic__img" src={user.image} alt="profile" />
                    :
                    <img width={width} height={height} className="profilePic__img" src="/assets/user.png" alt="profile" />
            }
        </div>
    )
}

export default ProfileIcon;