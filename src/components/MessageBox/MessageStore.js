// message store class
export default class MessageStore {
	constructor(socket) {
		this.messagesMap = new Map();
		this.socket = socket;
	}

	sendMessage(username, message) {
		// save message
		// this.saveMessage(username, message);

		// now we just need to send message to specified username
		console.log(`${message} --> ${username}`);
		this.socket.emit('message', {
			to: username,
			content: message,
		});
	}

	saveMessage(username, message) {
		// if username is not present in map
		if (Map.has(username)) {
			const messages = this.messagesMap.get(username);
			messages.push(message);

			this.messagesMap.set(username, messages);
		} else {
			const messages = [];
			messages.push(message); // add message

			this.messagesMap.set(username, messages); // add data in map
		}
	}

	getMessages(username) {
		// return messages of username
		const messages = this.messagesMap.get(username);
		return messages;
	}

	displayMap() {
		console.log(this.messagesMap);
	}
}
