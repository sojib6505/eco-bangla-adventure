import { Link } from "react-router";
import Navbar from "./Navbar";

export default function SignIn() {
  
   const handleLogin = e => {
     e.preventDefault();
     const form = e.target;
     const email = form.email.value;
     const password = form.password.value;
     console.log(email,password)
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
          <input name="password" type="password" className="input" placeholder="Password" />
          <p className="hover:underline cursor-pointer">Forget Password</p>
          <button type="submit" className="btn btn-primary mt-4">Login</button>
          <p>Don't have an account? <Link to='/sign_up' className="font-bold hover:underline">SignUp</Link></p>
        </fieldset>
      </form>
    </div>
  )
}
