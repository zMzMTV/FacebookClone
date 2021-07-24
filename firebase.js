import firebase from 'firebase'
import "firebase/storage"

var firebaseConfig = {
    apiKey: "AIzaSyDQoKxpwJKwpLpN3s-w49y4xtrKTpbkWX8",
    authDomain: "facebook-zmzm.firebaseapp.com",
    projectId: "facebook-zmzm",
    storageBucket: "facebook-zmzm.appspot.com",
    messagingSenderId: "949728497711",
    appId: "1:949728497711:web:e9654c5c51dd252f89f6da"
};
  
const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

const db = app.firestore()
const storage = firebase.storage()

export { db, storage }