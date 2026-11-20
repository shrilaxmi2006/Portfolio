import { motion } from "framer-motion";
import { Link } from "react-scroll";
import {
  FiDownload,
  FiMail,
  FiGithub,
  FiLinkedin,
} from "react-icons/fi";
import { profile } from "../data/profile";
import Typewriter from "./Typewriter";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-32 pb-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl w-full grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
        {/* Text Content */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="section-eyebrow font-mono text-xs sm:text-sm text-lilac-400 uppercase mb-5"
          >
            Available for full-time roles &amp; internships
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-semibold leading-[1.05] text-4xl sm:text-5xl md:text-6xl xl:text-7xl"
          >
            Hello, I'm <br className="hidden sm:block" />
            <span className="text-gradient">{profile.name}</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-4 text-xl sm:text-2xl md:text-3xl font-display font-medium text-lilac-200"
          >
            {profile.title}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-3 h-8 text-base sm:text-lg text-lilac-300"
          >
            <Typewriter words={profile.roles} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-6 max-w-xl text-mist text-base sm:text-lg leading-relaxed"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href={profile.resumeUrl}
              download
              className="btn-glow inline-flex items-center gap-2 font-semibold text-sm px-6 py-3.5 rounded-full bg-gradient-to-r from-violet-600 to-violet-800 hover:scale-[1.03] transition-transform"
            >
              <FiDownload /> Download Resume
            </a>

            <Link
              to="contact"
              smooth
              duration={500}
              offset={-90}
              className="inline-flex items-center gap-2 font-semibold text-sm px-6 py-3.5 rounded-full glass hover:border-lilac-300/50 cursor-pointer transition-colors"
            >
              <FiMail /> Contact Me
            </Link>

            <Link
              to="projects"
              smooth
              duration={500}
              offset={-90}
              className="inline-flex items-center gap-2 font-semibold text-sm px-6 py-3.5 rounded-full border border-white/15 hover:border-lilac-300/60 hover:text-lilac-200 cursor-pointer transition-colors"
            >
              View Projects
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="mt-10 flex items-center gap-4 text-lg text-mist"
          >
            <a
              href={profile.social.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-lilac-300 transition-colors"
            >
              <FiGithub />
            </a>

            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-lilac-300 transition-colors"
            >
              <FiLinkedin />
            </a>

            <span className="w-px h-4 bg-white/15" />
            <span className="text-sm">{profile.location}</span>
          </motion.div>
        </div>

        {/* Profile Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative mx-auto w-full max-w-md flex items-center justify-center"
        >
          <div className="w-56 h-56 sm:w-72 sm:h-72 rounded-full p-1 bg-gradient-to-br from-violet-400 via-violet-700 to-purple-950 shadow-[0_0_60px_rgba(107,17,203,0.35)]">
            <img
              src="/me.jpg"
              alt={`${profile.name} - Profile`}
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
