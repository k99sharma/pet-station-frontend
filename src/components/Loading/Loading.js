// importing components
import Spinner from 'react-bootstrap/Spinner'

// loading function
function Loading() {
    return (
        <div className="loading d-flex align-items-center justify-content-center">
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>
    )
}

export default Loading;