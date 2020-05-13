const env = require('../.env')
const Telegraf = require('telegraf')
const bot = new Telegraf(env.token)
const masterId = env.masterId 

bot.start(ctx => {
    const from = ctx.update.message.from

    if (from.id === masterId) 
        ctx.reply(`Ao seu dispor, mestre ${from.first_name}!`)
    else 
        ctx.reply(`Sinto muito, mas eu só falo com o meu mestre!`)
})

bot.startPolling()  
