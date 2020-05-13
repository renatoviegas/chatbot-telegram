const env = require('../.env')
const Telegraf = require('telegraf')
const moment = require('moment')
const bot = new Telegraf(env.token)

const _QUERO = 'Quero!'
const _PASSO = 'Passo!'

bot.hears('pizza', ctx => ctx.reply(_QUERO))
bot.hears(['fígado', 'chuchu'], ctx => ctx.reply(_PASSO))
bot.hears('🐷', ctx => ctx.reply(_QUERO))
bot.hears(/burguer/i, ctx => ctx.reply(_QUERO))
bot.hears([/brocolis/i, /salada/i], ctx => ctx.reply(_PASSO))
bot.hears(/(\d{2}\/\d{2}\/\d{4})/, ctx => {
    moment.locale('pt-BR')
    const data = moment(ctx.match[1], 'DD/MM/YYYY')
    ctx.reply(`${ctx.match[1]} cai em ${data.format('dddd')}`)  
})

bot.startPolling()