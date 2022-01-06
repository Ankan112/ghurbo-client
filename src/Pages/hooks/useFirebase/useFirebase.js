import { useEffect, useState } from "react";
import initializeAuthentication from "../../Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";

initializeAuthentication()


const useFirebase = () => {
    const [user, setUser] = useState({});
    // const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();


    const signInWithGoogle = (location, navigate) => {
        // setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const destination = location?.state?.from || '/'
                navigate(destination)
                setUser(result.user)
                sessionStorage.setItem("email", result.user.email);
            })
        // .finally(() => setIsLoading(false));
    }


    //Observe user state Change

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }

        });
        return () => unsubscribed;
    }, [auth]);




    const logOut = () => {

        signOut(auth).then(() => { })


    }



    return {
        user,
        signInWithGoogle,
        logOut

    }

}


export default useFirebase;

