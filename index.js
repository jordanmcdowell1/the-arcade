//Create the bot
const commando = require('discord.js-commando');
const bot = new commando.Client({
  commandPrefix: '?'
});

//Fetches commands from /commands folder.
bot.registry.registerGroup('random', 'Random');
bot.registry.registerGroup('basic', 'Basic');
bot.registry.registerGroup('moderator', 'Moderator');
bot.registry.registerGroup('levels', 'Levels');
bot.registry.registerCommandsIn(__dirname + '/commands');

bot.on('ready', () => {
  bot.user.setActivity('Developer: Jordy#0550')
})

//Logs the bot into Discord.
bot.login('NTE5MjI3NDk1OTM4MjYwOTky.DucR2Q.MsMbiqk2m-okRDRidQdgIHyxMpE');