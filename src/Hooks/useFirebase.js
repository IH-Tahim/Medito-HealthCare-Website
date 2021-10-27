import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuth from '../Firebase/firebase.init';

initializeAuth();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();
    console.log(user);



    // Handel Google Sign In
    const googleSignIn = () => signInWithPopup(auth, googleProvider)
        .then(result => {


            setUser(result.user);
        }).catch(error => {
            console.log(error);
        });



    // Track User login or logout details
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
        })
    }, [])

    // Handel Logout user

    const logOut = () => {
        signOut(auth)
            .then(() => {
                console.log("loged out");
            })
    }

    return {
        googleSignIn,
        user,
        logOut
    }
};

export default useFirebase;