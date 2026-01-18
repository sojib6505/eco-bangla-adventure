
import { Outlet } from "react-router";
import Banner from "../Components/Banner";
import Navbar from "../Components/Navbar";
import WelcomeBanner from "../Components/WelcomeBanner";


export default function Home() {
  return (
    <div className="bg-secondary">
        <Navbar></Navbar>
        <Banner></Banner>
        <WelcomeBanner></WelcomeBanner>
        <Outlet></Outlet>
    </div>
  )
}
