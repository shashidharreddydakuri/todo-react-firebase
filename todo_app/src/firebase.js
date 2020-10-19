import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA9-pzqrjovjQ7iadPukOi01MuFxKBMZnA",
  authDomain: "todo-app-cp-a36b4.firebaseapp.com",
  databaseURL: "https://todo-app-cp-a36b4.firebaseio.com",
  projectId: "todo-app-cp-a36b4",
  storageBucket: "todo-app-cp-a36b4.appspot.com",
  messagingSenderId: "463403686862",
  appId: "1:463403686862:web:c9671cddc3579bb122a99f",
  measurementId: "G-XY0KE07XBZ"
});

const db = firebaseApp.firestore();

export default db;



// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyA9-pzqrjovjQ7iadPukOi01MuFxKBMZnA",
//   authDomain: "todo-app-cp-a36b4.firebaseapp.com",
//   databaseURL: "https://todo-app-cp-a36b4.firebaseio.com",
//   projectId: "todo-app-cp-a36b4",
//   storageBucket: "todo-app-cp-a36b4.appspot.com",
//   messagingSenderId: "463403686862",
//   appId: "1:463403686862:web:c9671cddc3579bb122a99f",
//   measurementId: "G-XY0KE07XBZ"
// };