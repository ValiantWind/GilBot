//Object.defineProperty(exports, "__esModule", { value: true });
const gil = require("@guildedjs/gil");
class BotCommand extends gil.Command {
    constructor() {
        super(...arguments);
        this.name = "resetnick";
        this.aliases = ["removenick"];
        this.description = "Resets a member's nickname"
        this.cooldown
        this.arguments = [
            {
                name: "memberId",
                type: "string",
                required: true,
            }
        ];
    }
  cooldown = {
    seconds: 3,
    allowedUses: 1,
  }
    async execute(message, args) {

			if(!args.memberId){
				return message.reply("Please provide a member's ID.");
			}
      const userToReset = this.client.members.fetch(message.serverId, args.memberId);

			if(!userToReset){
				message.reply("This member does not exist!");
			} else {
				(await userToReset).resetNickname();
      
      message.send(`Successfully reset ${userToReset}'s nickname!`);
				message.delete();
			}
    }
    init(){}
}

exports.default = BotCommand;
