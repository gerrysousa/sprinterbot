import * as admin from "firebase-admin";

export class Firebase {
    
    private fb : any;
    private db: any;
    constructor() {

       this.fb = admin.initializeApp({
            credential: admin.credential.cert({
              projectId: process.env.FIREBASE_PROJECT_ID,
              clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
              privateKey: "-----BEGIN PRIVATE KEY-----\n<KEY>\n-----END PRIVATE KEY-----\n"
            }),
            databaseURL: process.env.FIREBASE_DATABASE_URL
          });

          this.db = this.fb.database();

          
        
    }

    isTweetExist(tweet : any) : boolean{
        return 
    }
    
    
    set(tweet: any)
    {
    

    }
    get()
    {


    }
}