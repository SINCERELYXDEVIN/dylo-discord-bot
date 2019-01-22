const Commando = require('discord.js-commando');
const bot = new Commando.Client({
    commandPrefix: "d,"
    })
const discord = require('discord.js');

bot.registry.registerGroup('simple', 'Simple');
bot.registry.registerGroup('music', 'Music');
bot.registry.registerGroup('admin', 'Admin');
bot.registry.registerCommandsIn(__dirname + '/commands');

global.servers = [];

bot.on('message', function(message){
    if(message.content == 'Hello')
    {
        message.channel.sendMessage('Hello ' + message.author + ', how are you?');
    }
});

bot.on("guildMemberAdd", function(member)
{
    var embed = new discord.RichEmbed()
    .setTitle("Welcome to Scammer Source.")
    .setThumbnail(member.user.avatarURL)
    .setColor(0x0FFFF)
    .setDescription("**Welcome to Scammer Source, we hope you enjoy your time here. One priorty command is b;pn (number) (description) to post numbers in our scam numbers channel! If you have any questions or concerns please let us know, and one of our staff team will gladly help you out.**\n\n__Scammer Source Rules__\n\n1; Please be respectful to staff & players at all times.\n2; Don't ask for any roles, we give roles to people who deserve them.\n3; No DDOS/Dox threats to anyone in the server.\n4; Don't play ear rape music/long/annoying music\n5; Scamming is not allowed at all, but if you are in this situation we aren't responsible.\n5; No spamming in any channels at any time.\n6; No invite links unless allowed by a staff member or god.\n6; Don't be racist/talk political in any chats.\n7; DM advertising/general advertising is strictly prohibited and result in permanent ban.\n8; Spreading any kind of software/virus software to any user in any channel including DM's is strictly prohibited and may result in a permanent ban.\n9; Arguing with staff is not tolerated, if you are experiencing any kind of staff abuse please let a higher staff member know.\n10; Never abuse alt accounts in any way, shape or form. This also includes avoiding a ban.\n\n**That is it, follow those general rules to stay on the safer side.**")
    member.send(embed)
    let memberRole = member.guild.roles.find("name", "Members");
    member.addRole(memberRole);
});

bot.on('ready',function(){
    console.log("Ready");
    bot.user.setActivity("d,help | d,info", {type: 'STREAMING'})
})

bot.login(process.env.BOT_TOKEN);
