import { Firebase } from "./firebase";

export class Telegram {
  private Telegraf = require("telegraf");
  private firebase: Firebase;
  private bot: any;
  private tweet_ids: Array<number>;
  private token = process.env.TELEGRAM_BOT_TOKEN;
  constructor(firebase: Firebase) {
    this.bot = new this.Telegraf(this.token);
    this.firebase = firebase;
    this.setData();
  }
  setData() {
    this.firebase.getAllById().then(all => {
      this.tweet_ids = Array.from(all);
    });
  }

  getData(ctx) {
    let randomTweet = this.tweet_ids[
      Math.floor(Math.random() * this.tweet_ids.length)
    ];
    return this.firebase
      .getById(randomTweet)
      .then(
        tweet =>
          `${tweet.text}
     
          ${tweet.status_url}`
      )
      .then(tweet => ctx.reply(tweet));
  }
  run() {
    this.bot.start(ctx => {
      return ctx.reply(
        "Achou que não ia ter um botzinho maroto pro telegram? Achou errado otário!"
      );
    });

    this.bot.command("/pensamento", ctx => this.getData(ctx));
    this.bot.startPolling();
  }
}
