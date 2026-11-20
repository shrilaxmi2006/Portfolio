import { FiBookOpen } from "react-icons/fi";
import { education } from "../data/timeline";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Education() {
  return (
    <section id="education" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <SectionHeading eyebrow="Education" title="Academic timeline" />

        <div className="relative pl-8 sm:pl-10">
          <div className="absolute left-[7px] sm:left-[9px] top-2 bottom-2 w-px bg-gradient-to-b from-violet-500 via-lilac-400/60 to-transparent" />
          <div className="flex flex-col gap-10">
            {education.map((e, i) => (
              <Reveal key={e.degree} delay={i * 0.1} direction="left">
                <div className="relative">
                  <span className="absolute -left-8 sm:-left-10 top-1.5 w-4 h-4 rounded-full bg-violet-600 ring-4 ring-violet-600/25 flex items-center justify-center">
                    <FiBookOpen className="text-[9px]" />
                  </span>
                  <div className="glass rounded-2xl p-5 sm:p-6">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="font-display font-semibold text-lg">{e.degree}</h3>
                      <span className="font-mono text-xs text-lilac-300">{e.period}</span>
                    </div>
                    <p className="text-mist text-sm mt-1">{e.school}</p>
                    <p className="text-lilac-200 text-sm mt-2 font-medium">{e.detail}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
