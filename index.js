/** import telegraf module */
const { Telegraf } = require("telegraf");
/** import telegraf module message filter */
const { message } = require("telegraf/filters");
/** initialize dotenv */
require("dotenv").config();
/** create new bot instants from telegraf */
const bot = new Telegraf(process.env.BOT_TOKEN);

/**
 * define bot's behavior for start command
 */
bot.start((ctx) => {
	const replay =
		"Welcome to download link bot.\n\n" +
		"This bot will help you to share your files with your friends and family.\n\n" +
		`<b>Usage:</b>\n`+
		"In order to use the bot you need to send a file or photo to the bot, then " +
		"the bot would send you the file's link. You can share the link with whoever " +
		"you want, and they'll be able to download the file";
	
	ctx.replyWithHTML(replay);
});

/**
 * define an event listener for the time
 * when user sends a document and create 
 * a download link for the document and
 * send it back to user as a reply to their
 * message
 */
bot.on(message("document"), async (ctx) => {
	try {
		/** indicates that the bot is uploading a file */
		ctx.sendChatAction("upload_document");
		/** extract document's id from message contexts */
		const docId = ctx.message.document.file_id;
		/** use bot's method to get the uploaded file's link */
		const link = await bot.telegram.getFileLink(docId);
		/** send the generated link as a reply to the user's message */
		ctx.reply("Your download link: " + link, {
			reply_to_message_id: ctx.message.message_id,
		});
	} catch (err) {
		ctx.reply(err?.message ?? err?.description);
	}
});

/**
 * define an event listener for the time
 * when user sends a photo and create 
 * a download link for the document and
 * send it back to user as a reply to their
 * message
 */
bot.on(message("photo"), async (ctx) => {
	try {
		/** indicates that the bot is uploading a file */
		ctx.sendChatAction("upload_photo");
		/** extract photo's id from message contexts */
		const photoId = ctx.message.photo[0].file_id;
		/** use bot's method to get the uploaded file's link */
		const link = await bot.telegram.getFileLink(photoId);
		/** send the generated link as a reply to the user's message */
		ctx.reply("Your download link: " + link, {
			reply_to_message_id: ctx.message.message_id,
		});
	} catch (error) {
		ctx.reply(error?.message ?? error?.description ?? "some error");
	}
});

/** launch the bot */
bot.launch();
