import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import initializeAuthentication from "../components/Firebase/firebase.init";


initializeAuthentication();

const useFirebase = () =>{
    const [ user, setUser] = useState({})

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () =>{
        signInWithPopup(auth, googleProvider)
        .then(result=>{
            console.log(result.user)
        })
    }

    const logOut = () =>{
        signOut(auth)
        .then(()=>{
            setUser({})
        })
    }


    // observe whether user auth state changed or not 
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/firebase.User
            //   const uid = user.uid;
            setUser(user)
              // ...
            } else {
              // User is signed out
              // ...
            }
          });
    },[])

    return{
        user,
        signInUsingGoogle,
        logOut
    }
 }

 export default useFirebase;