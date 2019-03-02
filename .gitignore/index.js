const Discord = require('discord.js')
const bot = new Discord.Client()

bot.login(process.env.TOKEN)

bot.on("message", function (message) {
    message.channel.send( '@everyone WALLLL-E')
        }
  ) ;



