import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCXEaI8RScDCP4wapOR1BFHvAMj0ozS8-w",
    authDomain: "instagram-clone-547bd.firebaseapp.com",
    databaseURL: "https://instagram-clone-547bd.firebaseio.com",
    projectId: "instagram-clone-547bd",
    storageBucket: "instagram-clone-547bd.appspot.com",
    messagingSenderId: "136954865336",
    appId: "1:136954865336:web:ba5398a7be01cfbfb7364d",
    measurementId: "G-X730EZS43F"
  });



const db = firebaseApp.firestore()
const auth = firebase.auth()
const storage = firebase.storage()

export {db, auth, storage};

  // export default db;