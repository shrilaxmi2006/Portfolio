import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";
import { FiMenu, FiX, FiSun, FiMoon, FiDownload } from "react-icons/fi";
import { profile } from "../data/profile";
import { useActiveSection } from "../hooks/useActiveSection";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "certificates", label: "Certificates" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];

export default function Navbar({ theme, toggleTheme }) {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(NAV_ITEMS.map((n) => n.id));

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-3">
        <nav className="glass-strong rounded-2xl px-4 sm:px-6 py-3 flex items-center justify-between">
          <Link
            to="home"
            smooth
            duration={500}
            className="font-display font-bold text-lg cursor-pointer select-none"
          >
            <span className="text-gradient"></span>Portfolio<span className="text-lilac-400"></span>
          </Link>

          <ul className="hidden lg:flex items-center gap-1 font-medium text-sm">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.id}
                  smooth
                  duration={500}
                  offset={-90}
                  spy={false}
                  className={`relative px-3.5 py-2 rounded-full cursor-pointer transition-colors ${
                    active === item.id
                      ? "text-white bg-white/10"
                      : "text-mist hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="w-9 h-9 rounded-full glass flex items-center justify-center hover:text-lilac-300 transition-colors"
            >
              {theme === "dark" ? <FiSun /> : <FiMoon />}
            </button>
            <a
              href={profile.resumeUrl}
              download
              className="btn-glow flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full bg-gradient-to-r from-violet-600 to-violet-800 hover:from-violet-500 hover:to-violet-700 transition-colors"
            >
              <FiDownload /> Resume
            </a>
          </div>

          <button
            className="lg:hidden w-9 h-9 flex items-center justify-center text-xl"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden mt-2 glass-strong rounded-2xl px-4 py-4"
            >
              <ul className="flex flex-col gap-1">
                {NAV_ITEMS.map((item) => (
                  <li key={item.id}>
                    <Link
                      to={item.id}
                      smooth
                      duration={500}
                      offset={-90}
                      onClick={() => setOpen(false)}
                      className={`block px-3 py-2.5 rounded-lg cursor-pointer ${
                        active === item.id ? "bg-white/10 text-white" : "text-mist"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-3 mt-3 pt-3 border-t border-white/10">
                <button
                  onClick={toggleTheme}
                  className="w-9 h-9 rounded-full glass flex items-center justify-center"
                >
                  {theme === "dark" ? <FiSun /> : <FiMoon />}
                </button>
                <a
                  href={profile.resumeUrl}
                  download
                  className="flex-1 text-center text-sm font-semibold px-4 py-2.5 rounded-full bg-gradient-to-r from-violet-600 to-violet-800"
                >
                  Download Resume
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
