// message component
export default function Message(props){
    // props
    const { content, type } = props;

    return(
        <div className={`message py-3 px-5 mb-3 rounded-xl ${type === 'sent' ? 'bg-green-300 border-2 border-green-500' : 'bg-blue-300 border-2 border-blue-500' }`}>
            <div className="message-content text-lg">
                {
                    content
                }
            </div>
        </div>
    );
}
