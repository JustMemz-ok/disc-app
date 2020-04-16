const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.NTY0NTQzNjAzNTY5ODUyNDQ1.Xpi02A.7Ip3T5hAxtbZ7mSAAkQ0AkDvxTQ);//where BOT_TOKEN is the token of our bot
