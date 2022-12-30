// message component
export default function Message(props){
    // props
    const { content, type } = props;

    return(
        <div className={`message py-3 px-5 mb-3 rounded-xl shadow-md bg-gradient-to-b ${type === 'sent' ? 'from-green-500 to-green-400' : 'from-blue-500 to-blue-400' }`}>
            <div className="message-content text-lg">
                {
                    content
                }
            </div>
        </div>
    );
}