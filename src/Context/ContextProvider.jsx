import { useEffect, useState } from "react"
import { Context } from "./Context"

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
    const contextValue = {
        adventure,
        loading
    }


    return (
        <Context value={contextValue}>
            {children}
        </Context>
    )
}
