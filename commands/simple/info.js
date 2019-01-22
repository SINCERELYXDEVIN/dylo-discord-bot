const commando = require('discord.js-commando');
const discord = require ('discord.js');
const bot = new discord.Client();

class InfoCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'info',
            group: 'simple',
            memberName: 'info',
            description: 'Info about the Dylo discord bot.'
        });
    }

    async run(message, args)
    {
        var myInfo = new discord.RichEmbed()
            .setTitle("Dylo")
            .addField("About Dylo", "My Creation Date Is, Friday, Janauary 9, 2019")
            .setColor(0x00FFFF)

        message.channel.sendEmbed(myInfo);
    }
}

module.exports = InfoCommand;