import { useEffect, useState } from "react"
import { Context } from "./Context"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase.init";

export default function ContextProvider({ children }) {
    const [adventure, setAdventure] = useState([]);
    const [loading,setLoading] = useState(true)
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
    // Registration in firebase
    const signUp = (email,password) => {
       return createUserWithEmailAndPassword(auth,email,password)
    }
    const contextValue = {
        adventure,
        loading,
        signUp
    }
    return (
        <Context value={contextValue}>
            {children}
        </Context>
    )
}
