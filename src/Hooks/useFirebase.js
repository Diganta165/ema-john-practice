import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";

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
        signOut
    }
 }

 export default useFirebase;