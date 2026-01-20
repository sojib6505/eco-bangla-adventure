import { Link, useNavigate,  } from "react-router";
import Navbar from "./Navbar";
import { use, useState } from "react";
import { Context } from "../Context/Context";
import { FaEye,FaEyeSlash } from "react-icons/fa";

export default function SignIn() {
  const {signIn} = use(Context)
  const navigate = useNavigate()
  const [showPass,setShowPass] = useState(false)
   const handleLogin = e => {
     e.preventDefault();
     const form = e.target;
     const email = form.email.value;
     const password = form.password.value;
     signIn(email,password)
     .then((result) => {
       console.log(result)
       navigate('/')
     })
     .catch((error) => {
      console.log(error)
     })
   }
  return (
    <div>
      <Navbar />
      <form onSubmit={handleLogin} className="flex justify-center min-h-screen items-center">
        <fieldset className="fieldset  bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend text-xl">Login</legend>

          <label className="label">Email</label>
          <input name="email" type="email" className="input" placeholder="Email" />

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
          <p className="hover:underline cursor-pointer">Forget Password</p>
          <button type="submit" className="btn btn-primary mt-4">Login</button>
          <p>Don't have an account? <Link to='/sign_up' className="font-bold hover:underline">SignUp</Link></p>
        </fieldset>
      </form>
    </div>
  )
}
