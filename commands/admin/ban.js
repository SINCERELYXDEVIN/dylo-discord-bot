const commando = require('discord.js-commando');

class BanCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'ban',
            group: 'admin',
            memberName: 'ban',
            description: 'Bans any user you choose. !ban (user)'
        });
    }

    async run(message, args)
    {
        let bannedUser = message.guild.member(message.mentions.users.first())
        if(!bannedUser)
        {
            message.channel.send(":x: Dylo could not find that user in this guild.")
            return;
        }
        if(!message.member.hasPermission("MANAGE_MESSAGES"))
        {
           message.channel.send(":x: You don't have permission to ban users.")
           return;
        }
        let words = args.split(' ');
        let reason = words.slice(1).join(' ');
        message.guild.member(bannedUser).ban(reason)
            .then(console.log)
            .catch(console.error);
    }
}

module.exports = BanCommand;