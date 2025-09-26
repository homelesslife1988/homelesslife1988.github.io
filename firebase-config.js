// firebase-config.js
const firebaseConfig = {
    apiKey: "AIzaSyBin8q9AYENaq5Up3v90jKQbrtV2zIwQwU",
    authDomain: "space-repetition-7a29e.firebaseapp.com",
    projectId: "space-repetition-7a29e",
    storageBucket: "space-repetition-7a29e.firebasestorage.app",
    messagingSenderId: "40672936283",
    appId: "1:40672936283:web:c19512816f040c41771a7e",
    measurementId: "G-37HBQBJ1LZ"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
