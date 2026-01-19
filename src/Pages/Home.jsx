
import { Outlet } from "react-router";
import Banner from "../Components/Banner";
import Navbar from "../Components/Navbar";
import WelcomeBanner from "../Components/WelcomeBanner";
import Footer from "../Components/Footer";


export default function Home() {
  return (
    <div >
        <Navbar></Navbar>
        <Banner></Banner>
        <WelcomeBanner></WelcomeBanner>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}
