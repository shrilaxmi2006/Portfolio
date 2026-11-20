import { FiAward, FiTarget, FiGitBranch, FiUsers, FiStar } from "react-icons/fi";
import { GiTrophyCup, GiMedal } from "react-icons/gi";
import { achievements } from "../data/misc";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const ICONS = {
  trophy: GiTrophyCup,
  medal: GiMedal,
  target: FiTarget,
  "git-branch": FiGitBranch,
  users: FiUsers,
  award: FiAward,
};

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Achievements"
          title="Wins worth mentioning"
          subtitle="Hackathons, competitions, and community contributions along the way."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((a, i) => {
            const Icon = ICONS[a.icon] || FiStar;
            return (
              <Reveal key={a.title} delay={(i % 3) * 0.08} direction="scale">
                <div className="glass rounded-2xl p-6 h-full text-center flex flex-col items-center gap-3 hover:border-lilac-300/40 transition-colors">
                  <span className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-600 to-violet-800 flex items-center justify-center text-2xl">
                    <Icon />
                  </span>
                  <h3 className="font-display font-semibold">{a.title}</h3>
                  <p className="text-mist text-sm leading-relaxed">{a.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
