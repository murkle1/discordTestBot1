require('dotenv').config(); 

const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
    ],
});



client.on('ready', () => {
    console.log(`${client.user.tag} has been birthed`) //string interpolation
});

client.on("messageCreate", (message) => {
    if (message.author.bot) return;
    console.log(`[${message.author.tag}]: ${message.content}`)
    if (message.content === 'hi'){
        message.reply('Hello');
    }
    
}); 

client.login(process.env.DISCORDJS_BOT_TOKEN); // start bot with npm run dev (refers to the script you wrote)

