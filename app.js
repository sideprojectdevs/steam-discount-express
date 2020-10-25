const linebot = require("linebot");
require('dotenv').config()

const random_reply = require("./random_reply")

const bot = linebot({
  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
});

bot.on("message", (event) => {
  // aquring incoming message with event.message.text
  let msg = event.message.text
  console.log(msg)
  // random reply
  msg = random_reply(msg)
  // reply message to current user with event.reply
  event.reply(msg)
  .then((data) => {
    console.log("ok")
    // handler after successful reply
    // console.log(data)
  })
  .catch((error) => {
    console.log("not ok")
    // handler after failed reply
    console.log(error)
  });
});

// webhook and port for listening
bot.listen("/linewebhook", process.env.PORT, function () {
    console.log(`LINE bot listening port ${process.env.PORT}`);
});