
//Object.defineProperty(exports, "__esModule", { value: true });
const gil = require("@guildedjs/gil");
class BotCommand extends gil.Command {
    constructor() {
        super(...arguments);
        this.name = "test";
        this.aliases = ["testing", "testt"];
    }
    execute(message, args) {
            message.send('Test success');
						message.delete();
    }
    init(){}
}
exports.default = BotCommand;
