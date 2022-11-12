// importing components
import Adoption from '../Adoption/Adoption';
import Settings from '../Settings/Settings';
import Profile from '../Profile/Profile';

// board function 
function Board(_props) {
    const { view } = _props;

    const renderSwitch = (params) => {
        switch (params) {
            case 'profile':
                return <Profile />

            case 'settings':
                return <Settings />

            case 'adoption':
                return <Adoption />

            default:
                return <div>None</div>
        }
    }

    return (
        <div className="board">
            {
                renderSwitch(view)
            }
        </div>
    )
}

export default Board;