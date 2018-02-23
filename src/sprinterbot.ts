import { TelegramBot } from "node-telegram-bot-api";

export class Telegram{

     private bot: any
     private token = process.env.TELEGRAM_BOT_TOKEN
     constructor(){
     this.bot = new TelegramBot(this.token, {polling: true});
     }

   run(){
       this.bot.onText(/\/tweet (.+)/, (msg) => {
       this.bot.sendMessage(msg.chat.id, "A justiça tem que acabar");
  });

   }

}



