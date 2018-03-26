import { Observable } from "rxjs/Observable";
import * as Twit from "twit";
import { Firebase } from "./firebase";
import * as moment from "moment";

export class TwitterStream {
  private T: any;
  private stream: any;
  private screen_name = process.env.TWITTER_ACCOUNT_STREAM;
  private moment: any;
  constructor() {
    this.T = new Twit({
      consumer_key: process.env.TWITTER_CONSUMER_KEY,
      consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
      access_token: process.env.TWITTER_ACCESS_TOKEN,
      access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
      timeout_ms: 60 * 1000 // optional HTTP request timeout to apply to all requests.
    });
    this.stream = this.T.stream("statuses/filter", {
      follow: this.screen_name
    });
    
  }

  getTweet$() {
    return Observable.create(observable => {
      this.stream.on("tweet", tweet => observable.next(tweet));
    });
  }

}