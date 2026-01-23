import { useEffect, useState } from "react"
import { Context } from "./Context"
import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase.init";

export default function ContextProvider({ children }) {
    const [adventure, setAdventure] = useState([]);
    const [loading,setLoading] = useState(true)
     const [firebaseLoading,setFirebaseLoading] = useState(true)
    const [user,setUser] = useState(null)
    useEffect(() => {
        fetch('/eco-adventure.json')
            .then(res => res.json())
            .then(data =>{
                 setAdventure(data);
                setLoading(false)
            }
            )
            .catch(err => {
                console.log(err)
                setLoading(false)
            }
                
            )
    }, [])

    // firebase Observer
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{
          setUser(currentUser)
          setFirebaseLoading(false)
        })
        return ()=>unSubscribe()
    },[])
    // Registration in firebase
    const signUp = (email,password) => {
       return createUserWithEmailAndPassword(auth,email,password)
    }
    const signIn = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const signOutUser = () => {
        return signOut(auth)
    }
    const signInWithGoogle =(provider) =>{
        return signInWithPopup(auth,provider)
    }
    const userUpdate = (userObj ,displayName,photoURL) => {
        if(!userObj) throw new Error("No user to update")
        return updateProfile(userObj,{
            displayName,
            photoURL
        })
    }
    const resetPassword = (email) =>{
        return sendPasswordResetEmail(auth,email)
    }
    const contextValue = {
        adventure,
        loading,
        signUp,
        signIn,
        firebaseLoading,
        user,
        signOutUser,
        signInWithGoogle,
        userUpdate,
        resetPassword
    }
    return (
        <Context.Provider value={contextValue}>
            {children}
        </Context.Provider>
    )
}
