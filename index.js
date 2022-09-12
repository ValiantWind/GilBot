require('dotenv').config;

const token = process.env.TOKEN;

const path = require('path');
const { BotClient } = require("@guildedjs/gil");
//import { TOKEN } from "./configs";
const client = new BotClient({
    token: token,
    prefix: "/",
});
client.login();
console.log("Bot is Online!!111!1")
process.on("unhandledRejection", console.log);
