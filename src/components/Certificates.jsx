import { FiAward, FiExternalLink } from "react-icons/fi";
import { certificates } from "../data/misc";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Certificates() {
  return (
    <section id="certificates" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Certificates" title="Courses & credentials" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((c, i) => (
            <Reveal key={c.title} delay={(i % 3) * 0.08}>
              <a
                href={c.url}
                target="_blank"
                rel="noreferrer"
                className="group glass rounded-2xl p-6 h-full flex flex-col gap-4 hover:border-lilac-300/40 hover:-translate-y-1 transition-all"
              >
                <div className="flex items-start justify-between">
                  <span className="w-11 h-11 rounded-xl bg-gradient-to-br from-violet-600 to-violet-800 flex items-center justify-center text-lg">
                    <FiAward />
                  </span>
                  <FiExternalLink className="text-mist group-hover:text-lilac-300 transition-colors" />
                </div>
                <div>
                  <h3 className="font-display font-semibold leading-snug">{c.title}</h3>
                  <p className="text-mist text-sm mt-1">{c.issuer} · {c.year}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
