import * as firebase from "firebase"
require("@firebase/firestore")

const firebaseConfig = {
    apiKey: "AIzaSyCa0kN_HdwRkV5DIbyoR5RD9qVIxJxtZZ0",
    authDomain: "wili-e8319.firebaseapp.com",
    databaseURL: "https://wili-e8319.firebaseio.com",
    projectId: "wili-e8319",
    storageBucket: "wili-e8319.appspot.com",
    messagingSenderId: "981225692491",
    appId: "1:981225692491:web:ca036e658a9e6968e39cce"
  };

  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();