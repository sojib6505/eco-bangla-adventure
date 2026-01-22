import { use, useState } from "react"
import { Context } from "../Context/Context"
import Swal from "sweetalert2"
import { useNavigate } from "react-router"
import logo from "../assets/logo.png"

import { div } from "framer-motion/client"
import Navbar from "../Components/Navbar"
import Loader from "../Components/Loader"
import UpdateUserProfile from "../Components/UpdateUserProfile"

export default function UserProfile() {
  const { signOutUser, user, firebaseLoading } = use(Context)
  console.log(user)
  const [isModalOpen, setIsModalOpen] = useState(false)
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
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.message
        });
      })
  }
  return (
    <div className="relative">
      <Navbar />
      <div className="flex justify-center gap-20 min-h-screen items-center bg-secondary">
        <div className="hidden md:block">
          <img className="w-50" src={logo} alt="" />
          <p className="text-xl font-bold text-primary ">Discover the beauty <br />of nature while preserving it for <br /> future generations.</p>
        </div>
        {
          firebaseLoading ? <Loader /> :
            <div className="space-y-5">
              <img className="rounded-sm max-w-50 max-h-50" src={user?.photoURL || 'https://i.ibb.co.com/vCzVBYTz/images.png'} alt="" />
              <p className="text-xl font-bold">{user?.displayName || "Anonymous User"}</p>
              <p className="text-xl font-semibold">{user?.email || "Email not available"}</p>
              <div className="flex gap-2">
                <button onClick={() => setIsModalOpen(true)} className="btn btn-primary">Update Profile</button>
                <button onClick={handleSignOut} className="btn btn-primary">SignOut</button>
              </div>
            </div>
        }

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {isModalOpen && <UpdateUserProfile user={user} onClose={() => setIsModalOpen(false)} />}
        </div>
      </div>
    </div>
  )
}
