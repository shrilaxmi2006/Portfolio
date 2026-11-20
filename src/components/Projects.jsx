import { useState } from "react";
import { FiGithub, FiExternalLink, FiArrowUpRight } from "react-icons/fi";
import { projects } from "../data/projects";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [active, setActive] = useState(null);

  return (
    <section id="projects" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Projects"
          title="Things I've built"
          subtitle="A mix of full-stack apps, tools, and experiments — click any card for the full write-up."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {projects.map((p, i) => (
            <Reveal key={p.id} delay={(i % 3) * 0.08}>
              <article className="group glass rounded-2xl overflow-hidden h-full flex flex-col hover:-translate-y-1.5 hover:border-lilac-300/40 transition-all duration-300">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />
                </div>
                <div className="p-5 flex flex-col gap-3 flex-1">
                  <h3 className="font-display font-semibold text-lg">{p.name}</h3>
                  <p className="text-mist text-sm leading-relaxed line-clamp-2">{p.tagline}</p>
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {p.stack.slice(0, 4).map((t) => (
                      <span key={t} className="text-[11px] font-mono px-2 py-1 rounded-full bg-white/5 border border-white/10 text-lilac-300">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-3 mt-auto pt-3 border-t border-white/10 text-sm">
                    <a href={p.github} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()} className="flex items-center gap-1.5 text-mist hover:text-lilac-300 transition-colors">
                      <FiGithub /> Code
                    </a>
                    <a href={p.demo} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()} className="flex items-center gap-1.5 text-mist hover:text-lilac-300 transition-colors">
                      <FiExternalLink /> Live
                    </a>
                    <button
                      onClick={() => setActive(p)}
                      className="ml-auto flex items-center gap-1 font-semibold text-lilac-300 hover:text-lilac-200"
                    >
                      Details <FiArrowUpRight />
                    </button>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}
