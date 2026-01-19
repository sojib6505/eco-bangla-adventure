import { div } from "framer-motion/client";
import Navbar from "../Components/Navbar";

export default function ExpertMeet() {
  return (
    <div>
        <Navbar></Navbar>
        <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="card bg-base-100 shadow-xl p-10 text-center space-y-4">
        <h2 className="text-3xl font-bold text-primary">
          Talk With Our Expert
        </h2>

        <p>Click below to join Google Meet</p>

        <a
          href="https://meet.google.com/"
          target="_blank"
          className="btn btn-primary"
        >
          Join Google Meet
        </a>
      </div>
    </div>
    </div>
  );
}
