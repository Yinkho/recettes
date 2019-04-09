import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAzg_DSfJrDJl9WVpyLI0VLcRTEiYYqzvg",
  authDomain: "recettes-3f75d.firebaseapp.com",
  databaseURL: "https://recettes-3f75d.firebaseio.com"
})

const base = Rebase.createClass(firebaseApp.database())

// This is a named export
export { firebaseApp }

// this is a default export
export default base