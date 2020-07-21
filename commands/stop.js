const Discord = require('discord.js');

exports.run = (bot,message,args) => {
    if(!bot.dispatcher) return console.error('erro');

    bot.queue = [];
    bot.playing = false;
    bot.dispatcher.pause();
    bot.dispatcher = false;

    const stop_message = new Discord.MessageEmbed()
        .setTitle("Rapid Bot")
        .setColor("#ff0015")
        .setAuthor('Rapid Bot', 'https://cdn.discordapp.com/app-icons/734154625845952694/8261474e8963b9e62bf19159ca52dcea.png', 'https://discord.com/oauth2/authorize?client_id=734154625845952694&permissions=8&scope=bot')
        .setURL("https://discord.com/oauth2/authorize?client_id=734154625845952694&permissions=8&scope=bot")
        .setDescription(`Música parada e fila limpa!`)
        .setFooter(`Parado por ${message.author.username}`,message.author.avatarURL());
    
    message.channel.send(stop_message);
};