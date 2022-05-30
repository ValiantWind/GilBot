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
    
      
      const userToAward = this.client.members.fetch(message.serverId, args.memberId);


      (await userToAward).awardXP(args.amount)
    }
    init(){}
}

exports.default = BotCommand;
