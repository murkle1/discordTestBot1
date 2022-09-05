require('dotenv').config(); 

const { Client, GatewayIntentBits, Partials } = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessageReactions,
    ],
    partials: [ // review why this is needed
       Partials.User,
       Partials.Message,
       Partials.Reaction,
       Partials.Channel
    ]
});


client.on('ready', () => {
    console.log(`${client.user.tag} has been birthed`) //string interpolation
});

client.on("messageCreate", (message) => {
    if (message.author.bot) return;
    console.log(`[${message.author.tag}]: ${message.content}`)
    if (message.content === 'games'){
        message.reply('React appropriately to gain access to the corresponding chat channels');
        
    }
    
}); 
// reaction filter 
// const filter = (reaction, user) => {
//     return reaction.emoji.name === '👍' && user.id === message.author.id;
// };

// const collector = message.createReactionCollector({ filter, time: 15000 });

// collector.on('collect', (reaction, user) => {
//     console.log(`Collected ${reaction.emoji.name} from ${user.tag}`);
// });

// collector.on('end', collected => {
//     console.log(`Collected ${collected.size} items`);
// });



client.on('messageReactionAdd', (messageReaction, user) => {
    
    console.log('i received the reaction');
    const { name } = messageReaction.emoji;
    const member = messageReaction.users.cache.get(user.id); // we need id of user that reacted 
    
// as of sept 4th, member.roles.add doesnt work XD
    if (messageReaction.message.id === '1015569651863912519'){ // id of message being used to react to
        switch (name) {
            case '🐶':
                member.roles.add('1015348185616633977') // id of test 1 role
              break;
            case '🐱':
                member.roles.add('1015348458426736760') // id of test 2 role
              break; 
                
        }
    }
});

client.login(process.env.DISCORDJS_BOT_TOKEN); // start bot with npm run dev (refers to the script you wrote)

