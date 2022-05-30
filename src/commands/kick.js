//Object.defineProperty(exports, "__esModule", { value: true });
const gil = require("@guildedjs/gil");
class BotCommand extends gil.Command {
    constructor() {
        super(...arguments);
        this.name = "kick";
        this.aliases = ["boot"];
      this.description = "Kicks a user";
        this.arguments = [
            {
                name: "memberId",
                type: "string",
                required: true,
            }
        ];
    }
  cooldown = {
    seconds: 5,
    allowedUses: 1,
  }
    async execute(message, args) {
       const userToKick = this.client.members.fetch(message.serverId, args.memberId);
      
      (await userToKick).kick();
      message.send('Kicked!')
    }
    init(){}
}

exports.default = BotCommand;
