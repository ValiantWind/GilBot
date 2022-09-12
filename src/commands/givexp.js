//Object.defineProperty(exports, "__esModule", { value: true });
const gil = require("@guildedjs/gil");
class BotCommand extends gil.Command {
    constructor() {
        super(...arguments);
        this.name = "givexp";
        this.aliases = ["awardxp"];
        this.description = "Awards XP to a user."
        this.arguments = [
            {
                name: "memberId",
                type: "string",
                required: true,
            },
          {
            name: 'amount',
            type: 'number',
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
			return	message.reply("Please provide a valid member ID");
			} else if(!args.amount){
				return message.reply("Please provide an XP Count")
			}
    
      
      const userToAward = this.client.members.fetch(message.serverId, args.memberId);


      (await userToAward).awardXP(args.amount)
			message.send(`Successfully gave ${args.amount} XP to ${userToAward}.`);
			message.delete();
    }
    init(){}
}

exports.default = BotCommand;
