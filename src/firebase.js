import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD5t6TgBcIdiAyVape15QuXVb1NiY8w-UQ",
    authDomain: "petsnatcher-18be2.firebaseapp.com",
    projectId: "petsnatcher-18be2",
    storageBucket: "petsnatcher-18be2.appspot.com",
    messagingSenderId: "853819743986",
    appId: "1:853819743986:web:be1a05e526665481da3a6b"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();