//Object.defineProperty(exports, "__esModule", { value: true });
const gil = require("@guildedjs/gil");
const { Embed, Message } = require("guilded.js");
class BotCommand extends gil.Command {
    constructor() {
        super(...arguments);
        this.name = "avatar";
        this.aliases = ["pfp", "profilepicture"];
      this.description = "Displays a user's avatar";
        this.arguments = [
            {
                name: "memberId",
                type: "string",
                required: false,
            }
        ];
    }
  cooldown = {
    seconds: 5,
    allowedUses: 1,
  }
    async execute(message, args) {

  if(!args.memberId){
    const userToView = this.client.members.fetch(message.serverId, message.authorId)
  
    const avatar = (await userToView).user.avatar
    const embed = new Embed
        embed.setTitle(`Avatar of ${(await userToView).username}`)
        .setImage(avatar)

      message.send(embed)
  } else {
    const userToView = this.client.members.fetch(message.serverId, args.memberId)
    
    const avatar = (await userToView).user.avatar

      const embed = new Embed
        embed.setTitle(`Avatar of ${(await userToView).username}`)
        .setImage(avatar)

      message.send(embed)
    
  }
      
    }
    init(){}
}

exports.default = BotCommand;
