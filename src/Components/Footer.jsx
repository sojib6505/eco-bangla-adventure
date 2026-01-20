import logo from '../assets/logo.png'
import { BsInstagram } from "react-icons/bs";
import { FaLinkedin,FaGithub} from "react-icons/fa";
export default function Footer() {
    return (
        <footer className="footer sm:footer-horizontal bg-primary text-neutral-content p-10">
            <aside>
                 <img className='w-30' src={logo} alt="" />
                <p>
                   EcoBangla Adventure
                    <br />
                    Providing Nature Adventure Guidelines & Tips
                </p>
            </aside>
            <nav>
                <h6 className="footer-title">Follow My Journey</h6>
                <div className="grid grid-flow-col gap-4">
                    <a href='https://www.instagram.com/sojib.dev.26/'>
                        <BsInstagram size={25}></BsInstagram>
                    </a>
                    <a href='https://www.linkedin.com/in/md-sojib-islam-b80a80271/'>
                       <FaLinkedin size={25}></FaLinkedin>
                    </a>
                    <a href='https://github.com/sojib6505'>
                        <FaGithub size={25}></FaGithub>
                    </a>
                </div>
            </nav>
        </footer>
    )
}
