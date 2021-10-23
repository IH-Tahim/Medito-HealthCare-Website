import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializeAuth=()=>{
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
}

export default initializeAuth;