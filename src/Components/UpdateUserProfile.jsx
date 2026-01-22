import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";
import { useContext, useState } from "react";
import { Context } from "../Context/Context";
import Swal from "sweetalert2";

export default function UpdateUserProfile({ user, onClose }) {

  const [displayName, setDisplayName] = useState("");
  const [photoURL, setPhotoURL] = useState("");

  const { userUpdate } = useContext(Context)
  const handleUpdateUser = (e) => {
    e.preventDefault();

    userUpdate(user, displayName, photoURL)
      .then(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Profile Updated Successfully",
          showConfirmButton: false,
          timer: 1500
        });
        onClose();
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <motion.div className="space-y-5   bg-secondary rounded-xl shadow-xl p-3 md:p-6 w-70 md:w-100 "
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.3 }}

    >
      <div className="flex justify-between items-center">
        <p className="text-xl font-semibold md:font-bold">Update Your Profile</p>
        <button onClick={onClose} className="btn btn-primary">
          <IoClose size={25}></IoClose>
        </button>
      </div>
      <form onSubmit={handleUpdateUser} className="flex flex-col justify-center p-5" action="">
        <input
          name="name"
          type="text"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
          placeholder="Display Name" className="input input-bordered w-full max-w-xs mb-2" />
        <input
          type="text"
          value={photoURL}
          onChange={(e) => setPhotoURL(e.target.value)}
          placeholder="Photo URL" className="input input-bordered w-full max-w-xs mb-2" />
        <button type="submit" className="btn btn-primary w-full max-w-xs">Update Profile</button>
      </form>

    </motion.div>
  )
}
