import { Link, replace, useLocation, useNavigate, } from "react-router";
import Navbar from "../Components/Navbar";
import { use, useState } from "react";
import { Context } from "../Context/Context";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { GoogleAuthProvider } from "firebase/auth";

export default function SignIn() {
  const { signIn,signInWithGoogle } = use(Context)
  const navigate = useNavigate()
  const [showPass, setShowPass] = useState(false)
  const [error,setError] = useState("")
  const provider = new GoogleAuthProvider()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'
  const handleLogin = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then((result) => {
        console.log(result)
        navigate(from,{replace:true})
      })
      .catch((error) => {
        console.log(error)
        setError(error.message)
      })
  }
  // login with Google
  const handleLoginWithGoogle = () => {
    signInWithGoogle(provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        console.log(user)
        navigate(from,{replace:true})
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
         setError(setError)
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
            <input name="password" type={!showPass ? 'password' : 'text'} className="input" placeholder="Password" required />
            <button type="button" onClick={() => setShowPass(!showPass)}>
              {showPass ?
                <FaEye size={15} className="absolute top-3 right-4"></FaEye> :
                <FaEyeSlash size={15} className="absolute top-3 right-4"></FaEyeSlash>
              }
            </button>
          </div>
          <p className="hover:underline cursor-pointer">Forget Password</p>
          {error && <p className="text-red-500">{error}</p>}
          <button type="submit" className="btn btn-primary mt-4">Login</button>
          <p>Don't have an account? <Link to='/sign_up' className="font-bold hover:underline">SignUp</Link></p>
          {/* login with Google */}
          <button type="button" onClick={handleLoginWithGoogle} className="btn bg-white text-black border-[#e5e5e5]">
            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
            Login with Google
          </button>
        </fieldset>
      </form>
    </div>
  )
}
