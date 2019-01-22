const commando = require('discord.js-commando');
const YTDL = require('ytdl-core');

class PauseSong extends commando.Command{
    constructor(client){
        super(client, {
            name:'pause',
            group: 'music',
            memberName: 'pause',
            description: 'pause the currently playing song'
        });
    }
    async run(message,args){
        if(!servers[message.guild.id].queue[0]){
            message.channel.send(':x: There is no song to pause at the moment.');
            console.log('no song');
        } else {
            if(message.member.voiceChannel != message.guild.me.voiceChannel){
                message.reply(":x: You aren't in the same voice channel!")
                console.log('no same channel');
            } else {
                console.log('entered in pause menu');
                if(servers[message.guild.id].dispatcher.paused){
                    message.reply(':x: The song has already been paused.');
                    console.log('song paused');
                } else {
                    servers[message.guild.id].dispatcher.paused = true;
                    message.channel.send(servers[message.guild.id].queue[0].title + " is paused");
                    console.log('paused');
                }
            }
        }
    }
}

module.exports = PauseSong;