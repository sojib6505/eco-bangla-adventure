import { use } from "react"
import { Context } from "../Context/Context"
import { Navigate, useLocation } from "react-router"

export default function PrivateRoute({ children }) {
    const location = useLocation()
    const { firebaseLoading, user } = use(Context)
    if (firebaseLoading) {
        return <p className="text-7xl text-center">Loading..............</p>
    }
    if (!user) {
        return <Navigate to='/sign_in' state={{from:location}} replace></Navigate>
    }
    return children
}
