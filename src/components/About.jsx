
import { FiCheckCircle } from "react-icons/fi";
import { profile } from "../data/profile";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="About Me"
          title="The person behind the code"
          subtitle="A closer look at my journey, my approach to building software, and what drives me."
        />

        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-12 items-center">
          <Reveal direction="right">
            <div className="relative mx-auto max-w-sm">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-violet-700/40 to-violet-500/10 blur-2xl" />

              
<div className="relative aspect-[3/5] sm:aspect-[4/5] rounded-[2rem] glass-strong glow-ring overflow-hidden bg-black/20">
  <img
    src="/mee.jpeg"
    alt="My profile"
    className="w-full h-full object-cover object-center"
  />
</div>
            </div>
          </Reveal>

          <div className="flex flex-col gap-6">
            <Reveal delay={0.05}>
              <p className="text-mist text-base sm:text-lg leading-relaxed">
                {profile.about.intro}
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="text-mist text-base sm:text-lg leading-relaxed">
                {profile.about.objective}
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="grid sm:grid-cols-2 gap-4 mt-2">
                {profile.about.highlights.map((h) => (
                  <div key={h.title} className="glass rounded-xl p-4 flex gap-3">
                    <FiCheckCircle className="text-lilac-400 mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold text-sm">{h.title}</p>
                      <p className="text-mist text-xs mt-0.5">{h.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
