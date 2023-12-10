// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB-W0Q_78LsI_KGQs3nqdAlGl1mLPzPHlw",
    authDomain: "fir-chat-ca439.firebaseapp.com",
    databaseURL: "https://fir-chat-ca439-default-rtdb.firebaseio.com",
    projectId: "fir-chat-ca439",
    storageBucket: "fir-chat-ca439.appspot.com",
    messagingSenderId: "202135269564",
    appId: "1:202135269564:web:bd37ae0d4e7e83512ae0b9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// export宣言で変数dbを別のファイルでもimport宣言で使えるようにする
export const db = getDatabase(app);