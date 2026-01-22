import { motion } from "framer-motion";

export default function WelcomeBanner() {
  return (
    <section
      className="relative bg-cover bg-center py-5 flex items-center justify-center"
     
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-secondary shadow-sm"></div>

      {/* Content Container */}
      <div className="relative max-w-7xl w-full px-4 sm:px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-10">

        {/* Left Side: Text */}
        <motion.div
          className="flex-1 "
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-2xl text-primary sm:text-3xl font-semibold mb-2">
            Welcome to EcoBangla Adventure
          </h2>
          <p className="text-base sm:text-lg lg:text-xl leading-relaxed mb-4">
            A land where untouched beauty meets timeless history. Explore vibrant cultures, warm-hearted people, and breathtaking landscapes. 
            From the mysterious Sundarbans to the world’s longest unbroken sea beach, rolling hills, serene tea plantations, and floating markets, every corner tells a story.
            <br />
            Step into Bangladesh, feel her warmth, embrace her wonders, and create your own map of discovery.
          </p>
          <motion.a href="#adventures"
            className="btn btn-primary transition-all duration-300 hover:scale-105 hover:shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            Explore Adventures
          </motion.a>
        </motion.div>
        {/* Right Side: YouTube Video */}
        <motion.div
          className="flex-1 w-full lg:w-125 h-100 sm:h-70 md:h-85 lg:h-105"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <iframe
            className="w-full h-full  rounded-2xl shadow-xl"
            src="https://www.youtube.com/embed/urTp2z0Rm1Y?si=rrqfYLXpx2KX9B2K"
            title="YouTube video player"
            // frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </motion.div>

      </div>
    </section>
  );
}
