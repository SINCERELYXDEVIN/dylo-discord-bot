const commando = require('discord.js-commando');

class LeaveChannelCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'leave',
            group: 'music',
            memberName: 'leave',
            description: 'Leaves the current channel you are in.'
        });
    }

    async run(message, args)
    {
        if(message.guild.voiceConnection)
        {
            message.guild.voiceConnection.disconnect();
        }
        else
        {
            message.channel.sendMessage(':x: The bot is not connected to any channels at the moment.');
        }
    }
}

module.exports = LeaveChannelCommand;