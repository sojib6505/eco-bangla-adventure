import { Link } from "react-router";
import Navbar from "./Navbar";
import logo from "../assets/logo.png"
import { use, useState } from "react";
import { Context } from "../Context/Context";
import Swal from "sweetalert2";
import { FaEye,FaEyeSlash } from "react-icons/fa";

export default function SignUp() {
  const [error, setError] = useState("")
  const { signUp } = use(Context)
  const [showPass,setShowPass] = useState(false)
  const handleSignUp = e => {
    e.preventDefault()
    const password = e.target.password.value;
    const email = e.target.email.value
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      setError('Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long.')
      return
    }
    else {
      setError('');
      signUp(email, password)
        .then((userCredential) => {
          console.log(userCredential.user)

          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "SignUp Successfully",
            showConfirmButton: false,
            timer: 1500
          });
        })
        .catch((error) => {
          setError(error.message)
        })
    }


  }
  return (
    <div>
      <Navbar />
      <form onSubmit={handleSignUp} className="flex justify-center min-h-screen items-center">
        <fieldset className="fieldset  bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend text-xl">SignUp</legend>

          <label className="label">Your Name</label>
          <input name="name" type="text" className="input" placeholder="Enter Your Name" required />

          <label className="label">Email</label>
          <input name="email" type="email" className="input" placeholder="Enter Your Email" required />

          <label className="label">Photo URL</label>
          <input name="photo" type="text" className="input" placeholder="Photo URL" />
          <label className="label">Password</label>
          <div className="relative">
            <input name="password" type={!showPass?'password':'text'} className="input" placeholder="Password" required />
            <button type="button" onClick={()=>setShowPass(!showPass)}>
               {showPass ?
             <FaEye size={15} className="absolute top-3 right-4"></FaEye>:
             <FaEyeSlash size={15} className="absolute top-3 right-4"></FaEyeSlash>
            }
            </button>
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <button type="submit" className="btn btn-primary mt-4">SignUp</button>
          <p>Already have an account? <Link to='/sign_in' className="font-bold hover:underline">Login</Link></p>
        </fieldset>
      </form>
    </div>
  )
}
