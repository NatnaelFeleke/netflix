import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
import { seedDatabase } from '../seed';

const config = {
  apiKey: "AIzaSyAipR6UuLOnJ4PssNAL6o3GRrtA4eB5LC8",
    authDomain: "netflix-c3cc9.firebaseapp.com",
    projectId: "netflix-c3cc9",
    storageBucket: "netflix-c3cc9.appspot.com",
    messagingSenderId: "291169032927",
    appId: "1:291169032927:web:aab498a917d6584f47e76a"
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
