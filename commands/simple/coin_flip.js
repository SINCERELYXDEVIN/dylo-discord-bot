const commando = require('discord.js-commando');
const discord = require ('discord.js');

class CoinFlipCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'coinflip',
            group: 'simple',
            memberName: 'coinflip',
            description: 'Flips a coin! Landing eithier Heads or Tails.'
        });
    }

    async run(message, args)
    {
        var chance = Math.floor(Math.random() * 2);
        if(chance == 0)
        {
            message.reply("Your coin landed on Heads!");
        }
        else
        {
            var TailsEmbed = new discord.RichEmbed()
            .setColor(0x0FFFF)
            .setDescription("Your coin landed, Tails!")
        }
    }
}

module.exports = CoinFlipCommand;