
import { TwitterStream } from './api/twitter';
import { Telegram } from './api/sprinterbot';

require('dotenv').config()

const T = new  Telegram()
T.run()
const twitter = new TwitterStream()
twitter.run()




