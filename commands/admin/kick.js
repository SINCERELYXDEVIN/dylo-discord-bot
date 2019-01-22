const commando = require('discord.js-commando');

class KickCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'kick',
            group: 'admin',
            memberName: 'kick',
            description: 'Kicks any user you choose. !kick (user)'
        });
    }

    async run(message, args)
    {
        let kickedUser = message.guild.member(message.mentions.users.first())
        if(!kickedUser)
        {
            message.channel.send(":x: Dylo could not find that user in this guild.")
            return;
        }
        if(!message.member.hasPermission("MANAGE_MESSAGES"))
        {
           message.channel.send(":x: You don't have permission to kick users.")
           return;
        }
        let words = args.split(' ');
        let reason = words.slice(1).join(' ');
        message.guild.member(kickedUser).kick(reason)
            .then(console.log)
            .catch(console.error);
    }
}

module.exports = KickCommand;