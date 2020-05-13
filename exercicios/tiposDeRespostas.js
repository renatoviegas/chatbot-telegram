const env = require('../.env')
const Telegraf = require('telegraf')
const bot = new Telegraf(env.token)

bot.start(async ctx => {
    await ctx.reply(`Seja bem-vindo ${ctx.update.message.from.first_name}! 😎`);
    await ctx.replyWithHTML(`Destacando mensagem <b>HTML</b>
        <i>de várias</i> <code>formas</code> <pre>possíveis</pre>
        <a href="http://www.google.com">Google</a>`)
    await ctx.replyWithMarkdown('Destacando mensagem *MarkDown*'
        + ' _de várias_ `formas` ```possíveis```'
        + ' [Google](http://www.google.com)')
    await ctx.replyWithPhoto({ source: `${__dirname}/resources/dogs.jpeg` })
    await ctx.replyWithPhoto('http://files.cod3r.com.br/curso-bot/gato1.jpg',
        { caption: 'Olha o estilo!' })
    await ctx.replyWithPhoto({ url: 'http://files.cod3r.com.br/curso-bot/gato2.jpg' })
    await ctx.replyWithLocation(-27.4274585,-48.4507396)
    await ctx.replyWithVideo('http://files.cod3r.com.br/curso-bot/cod3r-end.m4v')
    await ctx.replyWithVoice({ source: `${__dirname}/resources/applause.mp3` })
})

bot.startPolling()