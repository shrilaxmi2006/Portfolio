import { AnimatePresence, motion } from "framer-motion";
import { FiX, FiGithub, FiExternalLink } from "react-icons/fi";

export default function ProjectModal({ project, onClose }) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[90] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative glass-strong glow-ring rounded-3xl w-full max-w-3xl max-h-[85vh] overflow-y-auto"
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="sticky top-4 float-right mr-4 w-9 h-9 rounded-full bg-black/40 flex items-center justify-center hover:bg-black/60 transition-colors z-10"
            >
              <FiX />
            </button>

            <div className="aspect-[16/8] overflow-hidden">
              <img src={project.gallery[0]} alt={project.name} className="w-full h-full object-cover" />
            </div>

            <div className="p-6 sm:p-8 flex flex-col gap-6">
              <div>
                <h3 className="font-display text-2xl sm:text-3xl font-semibold">{project.name}</h3>
                <p className="text-lilac-300 mt-1">{project.tagline}</p>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.stack.map((t) => (
                  <span key={t} className="text-xs font-mono px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-lilac-300">
                    {t}
                  </span>
                ))}
              </div>

              <p className="text-mist leading-relaxed">{project.description}</p>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-sm mb-1.5 text-lilac-200">Problem Statement</h4>
                  <p className="text-mist text-sm leading-relaxed">{project.problem}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-1.5 text-lilac-200">Architecture</h4>
                  <p className="text-mist text-sm leading-relaxed">{project.architecture}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-1.5 text-lilac-200">Key Features</h4>
                  <ul className="text-mist text-sm leading-relaxed list-disc list-inside space-y-1">
                    {project.features.map((f) => <li key={f}>{f}</li>)}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-1.5 text-lilac-200">Challenges &amp; Learnings</h4>
                  <p className="text-mist text-sm leading-relaxed">{project.challenges}</p>
                  <p className="text-mist text-sm leading-relaxed mt-2">{project.learnings}</p>
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 font-semibold text-sm px-5 py-3 rounded-full border border-white/15 hover:border-lilac-300/60 transition-colors"
                >
                  <FiGithub /> View Code
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 btn-glow inline-flex items-center justify-center gap-2 font-semibold text-sm px-5 py-3 rounded-full bg-gradient-to-r from-violet-600 to-violet-800"
                >
                  <FiExternalLink /> Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
