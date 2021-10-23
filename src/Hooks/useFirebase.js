import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import initializeAuth from '../Firebase/firebase.init';
initializeAuth();
const useFirebase = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    const googleSignIn = signInWithPopup(auth, provider)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
    return {
        googleSignIn
    }
};

export default useFirebase;