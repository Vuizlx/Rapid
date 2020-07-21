const Discord = require('discord.js');

exports.run = (bot,message,args) => {
	const principal = new Discord.MessageEmbed()
		.setColor("#ff0015")
		.setTitle("Rapid Bot")
		.setURL("https://discord.com/oauth2/authorize?client_id=734154625845952694&permissions=8&scope=bot")
		.setDescription("Lista dos comandos")
		.setThumbnail('https://cdn.discordapp.com/app-icons/734154625845952694/8261474e8963b9e62bf19159ca52dcea.png')
		.setAuthor('Rapid Bot', 'https://cdn.discordapp.com/app-icons/734154625845952694/8261474e8963b9e62bf19159ca52dcea.png', 'https://discord.js.org')
		.addFields(
			{ name: "Comandos para Administração do servidor", value: "r!help administration" },
			{ name: "Comandos para ouvir músicas", value: "r!help music" },
			{ name: "Comandos Gerais", value: "r!help geral"},
			{ name: "Obter informações sobre o servidor", value: "r!serverinfo" }
		)
		.setTimestamp();

	const administration = new Discord.MessageEmbed()
	    .setColor("#ff0015")
	    .setTitle("Rapid Bot")
	    .setURL("https://discord.com/oauth2/authorize?client_id=734154625845952694&permissions=8&scope=bot")
	    .setDescription("Comandos para Administração do servidor (Para utiliza-los você precisa da permissão de Administrador ou o cargo 'Rapid Admin')")
	    .setThumbnail('https://cdn.discordapp.com/app-icons/734154625845952694/8261474e8963b9e62bf19159ca52dcea.png')
	    .setAuthor('Rapid Bot', 'https://cdn.discordapp.com/app-icons/734154625845952694/8261474e8963b9e62bf19159ca52dcea.png', 'https://discord.js.org')
	    .addFields(
			{ name: "Bane usuários", value: "r!ban (Usuários)\nEx: r!ban @Test#0000 @A#5313" },
			{ name: "Kicka usuários", value: "r!kick (Usuários)\nEx: r!ban @Test#0000 @A#5313" },
			{ name: "Da o cargo 'Rapid Admin' a usuários", value: "r!setadmin (Usuários)\nEx: r!setadmin @Test#0000 @A#5313" },
			{ name: "Limpa o chat" ,value: "r!clear (Quantidade de mensagens a ser deletadas)\nEx: r!clear 10" },
        )
	    .setTimestamp();
	
	const music = new Discord.MessageEmbed()
		.setColor("#ff0015")
		.setTitle("Rapid Bot")
		.setURL("https://discord.com/oauth2/authorize?client_id=734154625845952694&permissions=8&scope=bot")
		.setDescription("Comandos para ouvir músicas")
		.setThumbnail('https://cdn.discordapp.com/app-icons/734154625845952694/8261474e8963b9e62bf19159ca52dcea.png')
		.setAuthor('Rapid Bot', 'https://cdn.discordapp.com/app-icons/734154625845952694/8261474e8963b9e62bf19159ca52dcea.png', 'https://discord.js.org')
		.addFields(
			{ name: "Adiciona uma música a fila de reprodução", value: "r!play (Nome ou Link do Youtube)\nEx: r!play União Flasco" },
			{ name: "Pausa uma música", value: "r!pause" },
			{ name: "Despausa uma música", value: "r!resume" },
			{ name: "Para a música que está tocando e limpa a fila" ,value: "r!stop" },
			{ name: "Define o volume da música", value: "r!volume 0.5" },
			{ name: "Pula para a próxima música da fila", value: "r!skip" },
		)
		.setTimestamp();

	const geral = new Discord.MessageEmbed()
		.setColor("#ff0015")
		.setTitle("Rapid Bot")
		.setURL("https://discord.com/oauth2/authorize?client_id=734154625845952694&permissions=8&scope=bot")
		.setDescription("Comandos para ouvir músicas")
		.setThumbnail('https://cdn.discordapp.com/app-icons/734154625845952694/8261474e8963b9e62bf19159ca52dcea.png')
		.setAuthor('Rapid Bot', 'https://cdn.discordapp.com/app-icons/734154625845952694/8261474e8963b9e62bf19159ca52dcea.png', 'https://discord.js.org')
		.addFields(
			{ name: "Exibe os comandos", value: "r!help" },
			{ name: "Obtém informações sobre o servidor", value: "r!serverinfo" },
			{ name: "Exibe a mensagem de convite do bot", value: "r!invite" },
			{ name: "Exibe uma mensagem de regras" ,value: "r!rules" },
		)
		.setTimestamp();

	if (!args[0]){
		message.channel.send(principal);
	} else if (args[0].toLowerCase() === "administration"){
		message.channel.send(administration);
	} else if (args[0].toLowerCase() === "music"){
		message.channel.send(music);
	} else {
		message.channel.send(principal);
	}
}