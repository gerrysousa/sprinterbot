import * as admin from "firebase-admin";

export class Firebase {
  private fb: any;
  private;
  constructor() {
    this.fb = admin.initializeApp({
      credential: admin.credential.cert({
        projectId: process.env.FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n")
      }),
      databaseURL: process.env.FIREBASE_DATABASE_URL
    });
  }

  isTweetExist(tweet: any): boolean {
    return false;
  }

  set(tweet: any) {
    this.fb
      .database()
      .ref(`tweets/${tweet.id}`)
      .set({
        text: tweet.text,
        created_at: tweet.created_at,
        status_url: tweet.status_url
      });
  }
  get() {}
}
