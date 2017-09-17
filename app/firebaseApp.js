import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyBmUz_vKEYd1WPRsKlVGmV3ifoe2WxHlds",
    authDomain: "cham-soc-thu-cung.firebaseapp.com",
    databaseURL: "https://cham-soc-thu-cung.firebaseio.com",
    projectId: "cham-soc-thu-cung",
    storageBucket: "",
    messagingSenderId: "729432726431"
};

export const firebaseApp = firebase.initializeApp(config);