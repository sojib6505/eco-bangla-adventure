
import { useLoaderData } from "react-router"
import AdventureCard from "./AdventureCard"

export default function Adventure() {
    const  adventures = useLoaderData()

  return (
    <div className="grid md:grid-cols-2 md:px-10">
          {adventures.map(adventure => <AdventureCard key={adventure.ID} adventure={adventure}></AdventureCard>)}
    </div>
  )
}
