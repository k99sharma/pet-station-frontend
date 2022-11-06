// user dashboard function
function UserDashboard(_props) {
    const { user } = _props;

    return (
        <div className="userDashboard container">
            <div className="userDashboard__header h1">
                Dashboard
            </div>

            <div className="userDashboard__subheader">
                {
                    user.firstName
                }
            </div>
        </div>
    )
}

export default UserDashboard;