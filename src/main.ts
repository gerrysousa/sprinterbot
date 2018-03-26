import { TwitterStream } from "./api/twitter";
import { Telegram } from "./api/sprinterbot";
import { Firebase } from "./api/firebase";
require("dotenv").config();


const firebase = new Firebase();
const telegram = new Telegram(firebase);
const twitter = new TwitterStream().getTweet$();


/*twitter
  .filter(tweet => {
    if (!tweet.hasOwnProperty("retweeted_status")) {
      return tweet;
    }
  })
  .subscribe(tweet => {
    hash.push(tweet.id)
    telegram.setData(hash)  
    firebase.set({
      id: tweet.id,
      text: tweet.text,
      created_at: tweet.created_at,
      status_url: `https://twitter.com/${this.screen_name}/status/${tweet.id}`
    });
  });*/
 telegram.run()
