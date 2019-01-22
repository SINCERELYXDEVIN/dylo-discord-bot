const commando = require('discord.js-commando');
const YTDL = require('ytdl-core');

class QueueList extends commando.Command{
    constructor(client){
        super(client, {
            name: 'queue',
            group: 'music',
            memberName: 'queue',
            description: 'Shows the list of songs in a queue'
        });
    }
    async run(message, args){
        if(servers[message.guild.id].queue[0]){
            let resp = "__**Now Playing**__\n"+servers[message.guild.id].queue[0].title+" --Requested By- "+servers[message.guild.id].queue[0].requestor + "\n\n__**Queue**__";
            for(let i=1; i < servers[message.guild.id].queue.length; i++){
                resp += "\n"+i+": "+servers[message.guild.id].queue[i].title + " --Requested By- "+servers[message.guild.id].queue[i].requestor;
            }
            message.channel.send(resp);
        } else {
            message.channel.send("There currently isn't any music playing in this guild");
        }
    }
}

module.exports = QueueList;