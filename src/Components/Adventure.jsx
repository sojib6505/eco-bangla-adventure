
import AdventureCard from "./AdventureCard"
import { use, useEffect, } from "react"
import { Context } from "../Context/Context"
import { useLocation } from "react-router"

export default function Adventure() {
  const { adventure } = use(Context)
  const adventures = adventure
 const location = useLocation();
 useEffect(()=>{
   if(location.hash){
     const element = document.getElementById(location.hash.replace('#',''));
     if(element){
       element.scrollIntoView({behavior:'smooth'});
     }
   }
 } ,[location])
  return (
    <div id="adventures" >
      <h2 className="text-2xl md:text-3xl text-primary px-2 font-bold text-center py-2 md:py-10 animate__animated animate__bounce animate__slow">Our Eco-Friendly Adventures</h2>
      <div className="grid md:grid-cols-2 md:px-10">
        {adventures.map(adventure => <AdventureCard key={adventure.ID} adventure={adventure}></AdventureCard>)}
      </div>
    </div>
  )
}
