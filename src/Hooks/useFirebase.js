import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/LogIn/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword,GoogleAuthProvider,  signInWithPopup , updateProfile,  sendPasswordResetEmail, sendEmailVerification} from "firebase/auth";

initializeFirebase();
const useFirebase =()=>{
    const [user, setUser] =  useState({});
    const [error, setError] = useState('');
    const [isLoadign, setIsLoading] = useState(true);
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const registerUser = (email, password,name, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            setError('');
            
            const newUser = {email, displayName:name};
            setUser(newUser);


            updateProfile(auth.currentUser, {
              displayName: name
            })
            .then(()=>{

            })
            .catch((error) => {
               setError(error.message)
            });

            sendEmailVerification(auth.currentUser)
            .then(() => {
              // Email verification sent!
              // ...
            });
            




            history.replace('/');
           
          })
          .catch((error) => {
            setError(error.message)
            // ..
          })
          .finally(()=>setIsLoading(false));
    };

    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
       .then((userCredential) => {
           const destination = location?.state?.from || '/';
           history.replace(destination);
           setError('')
       })
       .catch((error) => {
         const errorCode = error.code;
         setError(error.message)
       })
       .finally(()=>setIsLoading(false));
    };
    
    const signInWithGoogle = (location, history) => {
      setIsLoading(true)
      signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        const destination = location?.state?.from || '/';
        history.replace(destination);
         setError('')
      }).catch((error) => {
           setError(error.message)
      })
      .finally(()=>setIsLoading(false));

    };
    const resetPassword = (email) =>{
      sendPasswordResetEmail(auth, email)
      .then(() => {
        setError('')
      })
      .catch((error) => {
        setError(error.message)
        // ..
      });

    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
             setUser(user)
            } 
            else {
              setUser({})
            }
            setIsLoading(false)
          });
        return () => unsubscribe;
    },[])

    const logOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            setError(error.message)
          })
          .finally(()=>setIsLoading(false));
    };


    return {
        user,
        isLoadign,
        registerUser,
        logOut,
        loginUser,
        error,
        signInWithGoogle,
        resetPassword
    }
}

export default  useFirebase;