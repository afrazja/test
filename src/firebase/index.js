import firebase from 'firebase';
try {
  var config = {
      apiKey: "AIzaSyCKFo_aGdd_wY8uKqRKvxyIFFxuzWd7Gbg",
      authDomain: "todo-react-74707.firebaseapp.com",
      databaseURL: "https://todo-react-74707.firebaseio.com",
      projectId: "todo-react-74707",
      storageBucket: "todo-react-74707.appspot.com",
      messagingSenderId: "929780781800"
    };
    firebase.initializeApp(config);

} catch (e) {

}
export var firebaseRef=firebase.database().ref();
export default firebase;
