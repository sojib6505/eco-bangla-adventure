
import AdventureCard from "./AdventureCard"
import { use } from "react"
import { Context } from "../Context/Context"


export default function Adventure() {
  const {adventure} = use(Context)
  const adventures = adventure

  return (
    
    <div id="adventures" >
      <h2 className="text-2xl md:text-3xl text-primary px-2 font-bold text-center py-2 md:py-10 animate__animated animate__bounce animate__slow">Our Eco-Friendly Adventures</h2>
      <div className="grid md:grid-cols-2 md:px-10">
        {adventures.map(adventure => <AdventureCard key={adventure.ID} adventure={adventure}></AdventureCard>)}
      </div>
    </div>
  )
}
