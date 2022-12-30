// message component
export default function Message(props){
    // props
    const { content, type, time } = props;

    return(
        <div className={`message p-2 mb-3 rounded-lg flex items-center ${type === 'sent' ? 'bg-green-500' : 'bg-red-500' }`}>
            <div className="message-content">
                {
                    content
                }
            </div>

            <div className="message-time ml-5 text-sm font-light">
                {
                    time
                }
            </div>
        </div>
    );
}