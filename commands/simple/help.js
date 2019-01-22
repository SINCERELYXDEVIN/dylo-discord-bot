const commando = require('discord.js-commando');
const discord = require ('discord.js');

class HelpCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'help',
            group: 'simple',
            memberName: 'help',
            description: 'Shows a list of the current commands we have.'
        });
    }

    async run(message, args)
    {
        var embed = new discord.RichEmbed()
            .setTitle("__Help Section__\n\nHere are some basic commands to get started with. We have 3 sections of commands (Admin/Mod Commands, Music Commands and Fun Commands).\n")
            .setDescription("\n\n\n__Admin/Mod Section__\n\n\**kick - Kicks any user you choose. d,kick (user)**\n**ban - Bans any user you choose. d,ban (user)**\n\n\n\n__**Music Section**__\n\n**join - Joins the current channel you are in. d,join**\n**leave - Leaves the current channel you are in. d,leave**\n**play - Play a song that you choose. d,play (song name).**\n**pause - Pause's the current song playing.**\n**resume - Resume's the song that was paused.**\n**queue - View the servers song queue.**\n\n\n\n__**Fun/Helpful Commands**__\n\n**avatar - Displays your current avatar. d,avatar**\n**coinflip - Flips a coin! Landing eithier Heads or Tails.**\n**diceroll - Rolls a six sided dice.**\n**help -  Shows a list of the current commands we have.**\n**info - Info about the Dylo discord bot.**")
            .setThumbnail("https://i.imgur.com/2830mgC.png%22")
            .setColor(0x0FFFF)
        message.member.send(embed)
    }
}

module.exports = HelpCommand;