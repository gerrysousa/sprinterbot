import * as admin from "firebase-admin";
export class Firebase {
  private fb: any;
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
  getById(id) {
    let leadsRef = this.fb.database().ref("tweets");
    return leadsRef
      .orderByChild("id")
      .equalTo(id)
      .once("child_added")
      .then(snapshot => {
        return snapshot.val();
      });
  }
  getAllById() {
    let v = [];
    let tweetsRef = this.fb.database().ref("tweets");
    return tweetsRef.once("value").then(function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        v.push(childSnapshot.val().id);
      });
      
      return v;
    });
  }
}
