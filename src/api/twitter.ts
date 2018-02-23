import * as Twit from "twit";
require('dotenv').config()

export class TwitterStream {

    private T : any
    private stream : any
    private screen_name = process.env.TWITTER_ACCOUNT_STREAM 
    constructor() {

         this.T = new Twit({
            consumer_key: process.env.TWITTER_CONSUMER_KEY,
            consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
            access_token: process.env.TWITTER_ACCESS_TOKEN,
            access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
            timeout_ms: 60 * 1000, // optional HTTP request timeout to apply to all requests.
        })
        
        this.stream = this.T.stream('statuses/filter', { follow: this.screen_name });
    }

    getTweets() : any {
        this.stream.start();
        this.stream.on('tweet', (tweet) => { 
        return tweet;
    });
        
    }
    closeStream = () => {
        this.stream.close()
    }
    

   
}




















    





