import React, { useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiDownload } from "react-icons/fi";
import profileImg from "../assets/profile.jpg";
import Lottie from "lottie-react";
import coderAnimation from "../assets/coder.json"; // <-- your Lottie JSON

const particlesInit = async (main) => {
  await loadFull(main);
};

export default function Hero() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) { // change 100 to the scroll threshold you want
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative rounded-3xl overflow-hidden my-6 px-6 sm:px-10 py-12 bg-white dark:bg-gray-900/70 text-gray-800 dark:text-gray-100">
      {/* Particles */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fpsLimit: 60,
          background: { color: "transparent" },
          interactivity: {
            events: { onHover: { enable: true, mode: "repulse" } },
          },
          particles: {
            color: { value: ["#7c3aed", "#06b6d4", "#f59e0b"] },
            links: { enable: false },
            move: { enable: true, speed: 1 },
            number: { value: 30 },
            opacity: { value: 0.7 },
            size: { value: { min: 2, max: 5 } },
          },
        }}
      />

      {/* Floating Cartoon on Right (not affecting layout) */}
      <motion.div
      className="hidden md:block z-0 pointer-events-none fixed" // always fixed
      animate={{
        x: [0, -15, 0, 15, 0],      // floating motion
        y: [0, 10, 0, -10, 0],
        rotate: [0, 2, -2, 0],
        scale: scrolled ? 1.5 : 1,   // enlarge on scroll
        top: scrolled ? 80 : 150,     // smooth vertical movement
        right: scrolled ? 40 : 250,   // smooth horizontal adjustment
      }}
      transition={{
        x: { repeat: Infinity, duration: 8, ease: "easeInOut" },
        y: { repeat: Infinity, duration: 8, ease: "easeInOut" },
        rotate: { repeat: Infinity, duration: 8, ease: "easeInOut" },
        scale: { type: "spring", stiffness: 120, damping: 20 },
        top: { type: "spring", stiffness: 100, damping: 20 },
        right: { type: "spring", stiffness: 100, damping: 20 },
      }}
    >
      {/* Glow background */}
      <div className="absolute -inset-6 rounded-full bg-gradient-to-r from-purple-500/30 to-cyan-400/30 blur-3xl animate-pulse"></div>

      {/* Cartoon */}
      <Lottie
        animationData={coderAnimation}
        loop={true}
        className="relative w-56 h-56 opacity-90"
      />
    </motion.div>

      <div className="relative z-10 flex flex-col gap-12">
        {/* Row 1: Profile (left) + Intro (right) */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          {/* Profile */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="flex justify-center md:justify-start"
          >
            <img
              src={profileImg}
              alt="Aman Kumar"
              className="w-36 h-36 sm:w-44 sm:h-44 rounded-full object-cover shadow-xl border-4 border-white dark:border-gray-700"
            />
          </motion.div>

          {/* Intro */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center md:text-left"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
              Aman Kumar
            </h1>
            <p className="mt-4 text-base sm:text-lg lg:text-xl max-w-xl mx-auto md:mx-0">
              Full-Stack Developer · MCA Student at{" "}
              <span className="font-semibold">
                'KIET Group of Institutions'
              </span>{" "}
              · Building web apps, APIs & wallet systems.
            </p>

            {/* Buttons */}
            <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-4">
              <a
                href="/resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 shadow-lg text-white text-sm sm:text-base"
              >
                <FiDownload /> Resume
              </a>
              <a
                href="https://github.com/amantaycon"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border dark:border-white/20 border-gray-800 text-sm sm:text-base"
              >
                <FiGithub /> GitHub
              </a>
              <a
                href="https://linkedin.com/in/amantaycon"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border dark:border-white/20 border-gray-800 text-sm sm:text-base"
              >
                <FiLinkedin /> LinkedIn
              </a>
            </div>
          </motion.div>
        </div>

        {/* Row 2: Quick Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="w-full max-w-2xl mx-auto md:mx-0 p-6 rounded-2xl border dark:border-white/20 border-gray-200 bg-gray-100 dark:bg-gray-800/70 shadow-md"
        >
          <h4 className="font-semibold text-lg text-center md:text-left">
            Quick Info
          </h4>
          <ul className="mt-3 text-sm sm:text-base space-y-2 text-center md:text-left">
            <li>
              <strong>Location:</strong> Ghaziabad, Delhi-NCR
            </li>
            <li>
              <strong>Email:</strong> aman.2426mca1782@kiet.edu
            </li>
            <li>
              <strong>Phone:</strong> +91 9334626132
            </li>
            <li>
              <strong>Education:</strong> MCA @ KIET (2024-2026)
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
