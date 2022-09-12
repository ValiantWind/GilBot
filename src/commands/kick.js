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
            },
					{
						name: "reason",
						type: "string",
						required: false,
					},
        ];
    }
  cooldown = {
    seconds: 5,
    allowedUses: 1,
  }
    async execute(message, args) {

			const userToKick = this.client.members.fetch(message.serverId, args.memberId);
			const reason = args.reason;
			if(!userToKick){
				return message.reply("This member does not exist.");
			}
			if(!args.memberId){
				return message.reply("You must provide a member ID");
			}
			if(!args.reason){
				(await userToKick).kick();
      message.send(`Successfully kicked ${userToKick}! || No reason provided.`);
			message.delete();
			} else {
				(await userToKick).kick();
      message.send(`Successfully kicked ${userToKick}! || ${reason}`);
			message.delete();
			}
			}
    init(){}
}

exports.default = BotCommand;
