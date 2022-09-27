import firebase from "firebase/app";
import "firebase/database";

const config = {
	apiKey: "AIzaSyAdbsM6dzLgqiA8s5t6JY1zlq6FPstCn7Q",
    authDomain: "chartroom-8344b.firebaseapp.com",
    projectId: "chartroom-8344b",
    storageBucket: "chartroom-8344b.appspot.com",
    messagingSenderId: "42455989755",
    appId: "1:42455989755:web:c3cfbd5b9b2bae1486df5e",
}

const db = firebase.initializeApp(config);
export default db;