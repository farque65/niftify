import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
	apiKey: "AIzaSyCN1TksSKMHpALv17meqGzxXHarpOhYa_0",
	authDomain: "e-clone-7386a.firebaseapp.com",
	databaseURL: "https://e-clone-7386a.firebaseio.com",
	projectId: "e-clone-7386a",
	storageBucket: "e-clone-7386a.appspot.com",
	messagingSenderId: "465130104566",
	appId: "1:465130104566:web:596d675eeab4fcc6a7eed7",
	measurementId: "G-R76P82RZ7V"
});

const auth = firebase.auth();

export { auth };