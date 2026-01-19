import { useLoaderData } from "react-router";
import Navbar from "../Components/Navbar";
import { use } from "react";
import { Context } from "../Context/Context";
import { FaClock, FaDollarSign, FaMapMarkerAlt, FaUsers } from "react-icons/fa";


export default function AdventureDetail() {
    const { adventure, loading } = use(Context)
    const id = useLoaderData()
    const remainingItem = adventure.filter(item => item.ID == id) || []
    const adventureObj = remainingItem[0]
    console.log(adventureObj)

    return (
        <>
            <Navbar></Navbar>
            <div>
                {
                    loading ?
                        <div className="w-full py-20 flex justify-center items-center">
                            <h2 className="text-xl font-semibold">Loading adventures...</h2>
                        </div> :
                        <div className="max-w-5xl mx-auto px-4 py-2 md:py-10">
                            {/* Title */}
                            <h1 className="text-xl md:text-4xl font-bold text-primary mb-2 md:mb-6 text-center">
                                {adventureObj?.Adventure_Title}
                            </h1>

                            {/* Main Image */}
                            <div className="w-full rounded-lg overflow-hidden shadow-lg mb-6">
                                <img
                                    src={adventureObj?.Image}
                                    alt={adventureObj?.Adventure_Title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            {/* Basic Info */}
                            <div className="grid md:grid-cols-2 gap-6 mb-6 text-gray-700">
                                <div className="flex items-center gap-2">
                                    <FaMapMarkerAlt className="text-primary" />
                                    <span className="font-semibold">Location:</span> {adventureObj?.Location}
                                </div>
                                <div className="flex items-center gap-2">
                                    <FaClock className="text-primary" />
                                    <span className="font-semibold">Duration:</span> {adventureObj?.Duration}
                                </div>
                                <div className="flex items-center gap-2">
                                    <FaUsers className="text-primary" />
                                    <span className="font-semibold">Max Group Size:</span> {adventureObj?.Max_Group_Size}
                                </div>
                                <div className="flex items-center gap-2">
                                    <FaDollarSign className="text-primary" />
                                    <span className="font-semibold">Cost:</span> {adventureObj?.Adventure_Cost}
                                </div>
                            </div>

                            {/* Description Section */}
                            <div className="mb-6">
                                <h2 className="text-2xl font-bold mb-2">Description</h2>
                                <p>{adventureObj?.Short_Description}</p>
                            </div>

                            {/* Category */}
                            <div className="mb-6">
                                <h2 className="text-2xl font-bold mb-2">Category</h2>
                                <p>{adventureObj?.Category_Name}</p>
                            </div>

                            {/* Adventure Level */}
                            <div className="mb-6">
                                <h2 className="text-2xl font-bold mb-2">Adventure Level</h2>
                                <p>{adventureObj?.Adventure_Level}</p>
                            </div>

                            {/* Included Items */}
                            <div className="mb-6">
                                <h2 className="text-2xl font-bold mb-2">Included Items</h2>
                                <ul className="list-disc list-inside">
                                    {adventureObj?.Included_Items?.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>

                            {/* Eco-Friendly Features */}
                            <div className="mb-6">
                                <h2 className="text-2xl font-bold mb-2">Eco-Friendly Features</h2>
                                <ul className="list-disc list-inside">
                                    {adventureObj?.Eco_Friendly_Features.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>

                            {/* Special Instructions */}
                            <div className="mb-6">
                                <h2 className="text-2xl font-bold mb-2">Special Instructions</h2>
                                <ul className="list-disc list-inside">
                                    {adventureObj?.Special_Instructions.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                }
            </div>
        </>

    )
}
