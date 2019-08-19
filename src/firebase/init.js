import firebase from 'firebase'



var config = {apiKey: "AIzaSyCr-FHDGQVkUcfG3VdQTykjHaVaMtTwiA4",
    authDomain: "baza-hotelowa.firebaseapp.com",
    databaseURL: "https://baza-hotelowa.firebaseio.com",
    projectId: "baza-hotelowa",
    storageBucket: "baza-hotelowa.appspot.com",
    messagingSenderId: "1064584579921",
    appId: "1:1064584579921:web:a934e59fbc812ec2"
  }
const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings( {timestampsInSnapshots: true})
export default firebaseApp.firestore()