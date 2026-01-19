
import { useLoaderData } from "react-router"
import AdventureCard from "./AdventureCard"


export default function Adventure() {
  const adventures = useLoaderData()

  return (
    <div id="adventures" >
      <h2 className="text-3xl font-bold text-center py-10 animate__animated animate__bounce animate__slow">Our Eco-Friendly Adventures</h2>
      <div className="grid md:grid-cols-2 md:px-10">
        {adventures.map(adventure => <AdventureCard key={adventure.ID} adventure={adventure}></AdventureCard>)}
      </div>
    </div>
  )
}
