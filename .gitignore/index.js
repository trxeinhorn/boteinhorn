const Discord = require('Discord.js');
const bot = new Discord.client();

var prefix = ("*")

bot.on('ready', function() {
    bot.user.setGame("Command: *help");
    console.log("Connectedç");
});

bot.login("Mzk1MDE4OTEwOTA0MjIxNzA2.DZG0lw.rV9nYylXf16hKM8i2JcpMZPmu-k");


bot.on('message', message => {
     if (message.content === prefix + "help"){
         message.channel.sendMessage("Liste des commandes: \n -*help");
     }

     if (message.content === "Salut"){
         message.reply("Bien le bonjour. :)");
         console.log("Commande Salut efffectué");
     }
});     
