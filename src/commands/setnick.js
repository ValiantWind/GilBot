//Object.defineProperty(exports, "__esModule", { value: true });
const gil = require("@guildedjs/gil");
class BotCommand extends gil.Command {
    constructor() {
        super(...arguments);
        this.name = "setnick";
        this.aliases = ["nickname", "nick"];
        this.arguments = [
            {
                name: "memberId",
                type: "string",
                required: true,
            },
          {
            name: 'nickname',
            type: 'string',
            required: true,
          }
        ];
    }
  cooldown = {
    seconds: 5,
    allowedUses: 1,
  }
    async execute(message, args) {
    
      if(!args.memberId){
				return message.reply("Please make sure you provided the valid ID of a member")
			} else if(!args.nickname){
				return message.reply("Please provide a nickname.")
			}
      const userToNick = this.client.members.fetch(message.serverId, args.memberId);

      const nickToSet = args.nickname;


      (await userToNick).updateNickname(nickToSet)
      message.send('Success!')
    }
    init(){}
}

exports.default = BotCommand;
