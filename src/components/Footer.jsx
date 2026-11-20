import { Link } from "react-scroll";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { profile } from "../data/profile";

const LINKS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 px-4 sm:px-6 lg:px-8 pt-14 pb-8">
      <div className="mx-auto max-w-7xl flex flex-col gap-10">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <Link to="home" smooth duration={500} className="font-display font-bold text-xl cursor-pointer">
            <span className="text-gradient">S</span>hri<span className="text-lilac-400">.</span>dev
          </Link>

          <ul className="flex flex-wrap gap-6 text-sm text-mist">
            {LINKS.map((l) => (
              <li key={l.id}>
                <Link to={l.id} smooth duration={500} offset={-90} className="cursor-pointer hover:text-lilac-300 transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a href={profile.social.github} target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full glass flex items-center justify-center hover:text-lilac-300 transition-colors"><FiGithub /></a>
            <a href={profile.social.linkedin} target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full glass flex items-center justify-center hover:text-lilac-300 transition-colors"><FiLinkedin /></a>
<a
  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(profile.email)}`}
  target="_blank"
  rel="noreferrer"
  aria-label="Send email"
  className="w-9 h-9 rounded-full glass flex items-center justify-center hover:text-lilac-300 transition-colors"><FiMail />
</a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 border-t border-white/10 text-xs text-mist">
          <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          <p>Designed &amp; built with React, Tailwind CSS &amp; Framer Motion.</p>
        </div>
      </div>
    </footer>
  );
}
