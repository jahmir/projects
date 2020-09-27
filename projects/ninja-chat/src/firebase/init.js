import * as firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDzcY5AeRyIGnfuKEgPfJfKG7NaEGrNdqY",
    authDomain: "ninja-chat-1c8ff.firebaseapp.com",
    databaseURL: "https://ninja-chat-1c8ff.firebaseio.com",
    projectId: "ninja-chat-1c8ff",
    storageBucket: "ninja-chat-1c8ff.appspot.com",
    messagingSenderId: "104989170112",
    appId: "1:104989170112:web:55847b458f98eb6a2cd025"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  export default firebaseApp.firestore()
