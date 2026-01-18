import { MdOutlineFeaturedPlayList } from "react-icons/md"
import { motion } from "framer-motion";


export default function AdventureCard({ adventure }) {
    const { Adventure_Title, Image, Eco_Friendly_Features, } = adventure
    return (

        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
        >
             <div className="hero ">
            <div className="hero-content flex-col  lg:flex-row-reverse ">
               <div className="md:w-100">
                  <img
                    src={Image}
                    className="w-full rounded-lg shadow-2xl transition-transform duration-500 hover:scale-105"
                />
               </div>
                <div>
                    <h1 className="text-2xl font-bold">{Adventure_Title}</h1>
                     <div className="py-2">
                        
                       <div className="flex gap-2 items-center">
                        <MdOutlineFeaturedPlayList size={20}></MdOutlineFeaturedPlayList>
                       <p> {Eco_Friendly_Features[0]}</p>
                       </div>
                   
                     
                        <div className="flex gap-2 items-center">
                        <MdOutlineFeaturedPlayList size={20}></MdOutlineFeaturedPlayList>
                       <p> {Eco_Friendly_Features[1]}</p>
                       </div>
                     </div>
                    <button className=" btn btn-primary transition-all duration-300 hover:scale-105 hover:shadow-lg">Explore Now</button>
                </div>
            </div>
        </div>
        </motion.div>

    )
}
