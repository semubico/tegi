const sendMessage = require("./sendMessage")

exports.handler = async (event) => {
	const { message } = JSON.parse(event.body);
	await sendMessage(message.chat.id, "OwO");
	return { statusCode: 200 };
};
