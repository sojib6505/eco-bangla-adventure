import { useEffect, useState } from "react"
import { Context } from "./Context"

export default function ContextProvider({ children }) {
    const [adventure, setAdventure] = useState([]);
    useEffect(() => {
        fetch('eco-adventure.json')
            .then(res => res.json())
            .then(data =>
                setAdventure(data)
            )
            .catch(err => 
                console.log(err)
            )
    }, [])
    const contextValue = {
        adventure
    }


    return (
        <Context value={contextValue}>
            {children}
        </Context>
    )
}
