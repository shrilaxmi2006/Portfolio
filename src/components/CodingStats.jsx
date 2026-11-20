import { FiGithub, FiCode } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { profile } from "../data/profile";

const cards = [
  { icon: FiGithub, label: "GitHub Repositories", value: "12", note: "12 starred · 6 pinned", url: profile.social.github },
];

export default function CodingStats() {
  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Coding Activity"
          title="GitHub"
          subtitle="A live-ish pulse on where my code and problem-solving time goes."
        />
        <div className="grid sm:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <Reveal key={c.label} delay={i * 0.08}>
              <a
                href={c.url}
                target="_blank"
                rel="noreferrer"
                className="glass rounded-2xl p-6 flex flex-col gap-3 h-full hover:border-lilac-300/40 hover:-translate-y-1 transition-all"
              >
                <span className="w-11 h-11 rounded-xl bg-gradient-to-br from-violet-600 to-violet-800 flex items-center justify-center text-lg">
                  <c.icon />
                </span>
                <p className="font-display text-3xl font-bold text-gradient">{c.value}</p>
                <p className="font-semibold text-sm">{c.label}</p>
                <p className="text-mist text-xs">{c.note}</p>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
