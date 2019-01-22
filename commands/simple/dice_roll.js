const commando = require('discord.js-commando');

class DiceRollCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'diceroll',
            group: 'simple',
            memberName: 'diceroll',
            description: 'Rolls a six sided dice.'
        });
    }

    async run(message, args)
    {
        var diceRoll = Math.floor(Math.random() * 6) + 1;
        message.reply("You rolled a " + diceRoll + "! :man_dancing:");
    }
}

module.exports = DiceRollCommand;