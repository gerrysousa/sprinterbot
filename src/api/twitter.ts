import * as Twit from "twit";
import { Firebase } from "./firebase";
import * as moment from 'moment';
import 'moment/locale/pt-br';
export class TwitterStream {
  private T: any;
  private stream: any;
  private screen_name = process.env.TWITTER_ACCOUNT_STREAM;
  private firebase: Firebase;
  private moment: any
  constructor() {
    this.T = new Twit({
      consumer_key: process.env.TWITTER_CONSUMER_KEY,
      consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
      access_token: process.env.TWITTER_ACCESS_TOKEN,
      access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
      timeout_ms: 60 * 1000 // optional HTTP request timeout to apply to all requests.
    });
    this.stream = this.T.stream("statuses/filter",  { follow: this.screen_name });
    this.firebase = new Firebase();
       
  }

  run(): any {
    this.stream.on("tweet", tweet => {
      console.log(tweet)
      if (tweet != null) {
        if (!tweet.hasOwnProperty("retweeted_status")) {
          this.firebase.set({
            id: tweet.id,
            text: tweet.text,
            created_at: tweet.created_at,
            status_url: `https://twitter.com/${this.screen_name}/status/${
              tweet.id
            }`
          });
        }
      }
    });
  }
}
