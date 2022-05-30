"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
process.on("unhandledRejection", console.log);
