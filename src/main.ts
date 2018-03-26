import { TwitterStream } from "./api/twitter";
import { Telegram } from "./api/sprinterbot";
import { Firebase } from "./api/firebase";
import 'rxjs/add/operator/filter';
require("dotenv").config();

const firebase = new Firebase();
const telegram = new Telegram(firebase);
const twitter = new TwitterStream().getTweet$();

const tweetSub = twitter.filter(tweet => {
  if (!tweet.hasOwnProperty("retweeted_status")) {
    return tweet;
  }
});

tweetSub.subscribe(tweet => {
   firebase.set({
    id: tweet.id,
    text: tweet.text,
    created_at: tweet.created_at,
    status_url: `https://twitter.com/${tweet.user.screen_name}/status/${tweet.id}`
  });
});
telegram.run();
