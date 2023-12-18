import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"


const firebaseConfig = {
  apiKey:"",
  authDomain: "myfirstproject-9592a.firebaseapp.com",
  databaseURL: "https://myfirstproject-9592a-default-rtdb.firebaseio.com",
  projectId: "myfirstproject-9592a",
  storageBucket: "myfirstproject-9592a.appspot.com",
  messagingSenderId: "907460332836",
  appId: "1:907460332836:web:fed982da92f94102de77b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export default app;