
//Object.defineProperty(exports, "__esModule", { value: true });
const gil = require("@guildedjs/gil");
class BotCommand extends gil.Command {
    constructor() {
        super(...arguments);
        this.name = "test";
        this.aliases = ["testing", "testt"];
    }
    execute(message, args) {
            return message.reply('Test success');
    }
    init(){}
}
exports.default = BotCommand;
