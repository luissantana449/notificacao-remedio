// Supports ES6
// import { create, Whatsapp } from 'venom-bot';
const venom = require("venom-bot");
const cron = require("node-cron");

venom
  .create({
    session: "session-name", //name of session
  })
  .then((client) => start(client))
  .catch((erro) => {
    console.log(erro);
  });

function start(client) {
  // Schedule the task to run at 8 AM, 2 PM, and 8 PM every day
  cron.schedule("0 8,14,20 * * *", () => {
    // Code to send the message
    client
      .sendText("+5565999536815", "*Hora do remédio!*")
      .then((result) => {
        console.log("Message sent successfully");
      })
      .catch((error) => {
        console.error("Error sending message:", error);
      });
  });

  // Rest of your code...
}
