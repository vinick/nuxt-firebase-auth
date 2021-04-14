import firebase from 'firebase/app'
import 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLYi7NrfEWzBk3th97rsn4DcHj4TZH6M4",
  authDomain: "nuxt-auth-example-b8598.firebaseapp.com",
  projectId: "nuxt-auth-example-b8598",
  storageBucket: "nuxt-auth-example-b8598.appspot.com",
  messagingSenderId: "356844820116",
  appId: "1:356844820116:web:0ea411b61f7b1b87bd8681"
};
// Initialize Firebase
let app = null
if (!firebase.apps.length) {
  app = firebase.initializeApp(firebaseConfig)
}

export default firebase
