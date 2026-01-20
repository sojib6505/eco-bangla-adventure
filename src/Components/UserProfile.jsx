import { use } from "react"
import { Context } from "../Context/Context"
import Swal from "sweetalert2"
import { useNavigate } from "react-router"
import logo from "../assets/logo.png"
import { div } from "framer-motion/client"
import Navbar from "./Navbar"
import Loader from "./Loader"

export default function UserProfile() {
    const { signOutUser,user,firebaseLoading } = use(Context)
    console.log(user)
    const navigate = useNavigate()
    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "SignOut Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
              navigate('/')
            })
            .catch(()=>{
                 Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.message
        });
            })
        }
        return (
         <div>
              <Navbar/>
               <div className="flex justify-center gap-20 min-h-screen items-center bg-secondary">
                 <div className="hidden md:block">
                    <img className="w-50" src={logo} alt="" />
                    <p  className="text-xl font-bold text-primary ">Discover the beauty <br />of nature while preserving it for <br /> future generations.</p>
                </div>
              {
                 firebaseLoading ? <Loader/> : 
                   <div className="space-y-5">
                    <img className="rounded-sm" src={user?.photoURL || 'https://i.ibb.co.com/vCzVBYTz/images.png'} alt="" />
                    <p className="text-xl font-bold">{user?.displayName || "Anonymous User"}</p>
                    <p className="text-xl font-semibold">{user?.email || "Email not available"}</p>
                    <button onClick={handleSignOut} className="btn btn-primary">SignOut</button>
                </div>
              }
               
            </div>
         </div>
        )
    }
