const commando = require('discord.js-commando');

class JoinVoice extends commando.Command{
    constructor(client){
        super(client, {
            name: 'join',
            group: 'music',
            memberName: 'join',
            description: 'joins the voice chat'
        });
    }
    async run(message, args){
        if(args){
            message.channel.send(':x: A response after b,join is not required.');
        } else {
        if(message.member.voiceChannel){
            if(!message.guild.voiceConnection)//checking if already inside the voice channel or not
            {
                message.member.voiceChannel.join().then(
                    message.channel.send(':white_check_mark:  Successfully joined the voice channel you are connected to.')
                );
            } else {
                message.channel.send(':x: I am already connected to the voice channel.');
            }
        } else {
            message.channel.send(":x: TYETS");
        }
    }
    }
}

module.exports = JoinVoice;