import { useContext, useState } from "react";
import { useLoaderData, useNavigate } from "react-router";
import Navbar from "../Components/Navbar";
import { Context } from "../Context/Context";
import { FaClock, FaDollarSign, FaMapMarkerAlt, FaUsers } from "react-icons/fa";

export default function AdventureDetail() {
  const { adventure, loading } = useContext(Context);
  const id = useLoaderData();
  const navigate = useNavigate();
  const adventureObj = adventure.find(item => item.ID === id);
  const [showModal, setShowModal] = useState(false);
  const handleTalkWithExpert = () => {
    const hour = new Date().getHours();

    if (hour >= 10 && hour < 17) {
      navigate("/expert-meet"); 
    } else {
      setShowModal(true); 
    }
  };

  return (
    <>
      <Navbar />
      {loading ? (
        <div className="w-full py-20 flex justify-center">
          <h2 className="text-xl font-semibold">Loading adventures...</h2>
        </div>
      ) : (
        <div className="max-w-5xl mx-auto px-4 py-10 space-y-6">
          {/* Title */}
          <h1 className="text-xl md:text-4xl font-bold text-primary text-center">
            {adventureObj?.Adventure_Title}
          </h1>
          {/* Main Image */}
          <div className="w-full rounded-lg overflow-hidden shadow-lg">
            <img
              src={adventureObj?.Image}
              alt={adventureObj?.Adventure_Title}
              className="w-full h-full object-cover"
            />
          </div>
          {/* Basic Info */}
          <div className="grid md:grid-cols-2 gap-6 text-gray-700">
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
          {/* Description */}
          <div>
            <h2 className="text-xl font-bold mb-2">Description</h2>
            <p>{adventureObj?.Short_Description}</p>
          </div>
          {/* Category */}
          <div>
            <h2 className="text-xl font-bold mb-2">Category</h2>
            <p>{adventureObj?.Category_Name}</p>
          </div>
          {/* Adventure Level */}
          <div>
            <h2 className="text-xl font-bold mb-2">Adventure Level</h2>
            <p>{adventureObj?.Adventure_Level}</p>
          </div>
          {/* Included Items */}
          <div>
            <h2 className="text-xl font-bold mb-2">Included Items</h2>
            <ul className="list-disc list-inside">
              {adventureObj?.Included_Items?.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          {/* Eco-Friendly Features */}
          <div>
            <h2 className="text-xl font-bold mb-2">Eco-Friendly Features</h2>
            <ul className="list-disc list-inside">
              {adventureObj?.Eco_Friendly_Features?.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          {/* Special Instructions */}
          <div>
            <h2 className="text-xl font-bold mb-2">Special Instructions</h2>
            <ul className="list-disc list-inside">
              {adventureObj?.Special_Instructions?.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <button
            onClick={handleTalkWithExpert}
            className="btn btn-primary"
          >
            Talk with Expert
          </button>
        </div>
      )}

      {/* Modal for Off Hours */}
      {showModal && (
        <dialog className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Consultation Time</h3>
            <p className="py-4">
              Our experts are available from <b>10:00 AM – 5:00 PM</b>
            </p>
            <button
              className="btn btn-primary"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
        </dialog>
      )}
    </>
  );
}
