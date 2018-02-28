
export class Telegram{
     Telegraf = require('telegraf')
     private bot: any
     private token = process.env.TELEGRAM_BOT_TOKEN
     constructor(){
       this.bot = new this.Telegraf(this.token)
     }

   run(){

    this.bot.start((ctx) => {
     return ctx.reply('Achou que não ia ter um botzinho maroto pro telegram? Achou errado otário!');
    })
       
    this.bot.command('/pensamento', (ctx) => ctx.reply('A justiça tem que acabar!'));
    this.bot.startPolling();  
      
  };
 
}