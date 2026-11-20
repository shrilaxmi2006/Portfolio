import { motion } from "framer-motion";
import { FiLayout, FiServer, FiDatabase, FiCode, FiTool, FiUsers } from "react-icons/fi";
import { skillGroups } from "../data/skills";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const ICONS = {
  layout: FiLayout,
  server: FiServer,
  database: FiDatabase,
  code: FiCode,
  tool: FiTool,
  users: FiUsers,
};

function SkillBar({ name, level, delay }) {
  return (
    <div>
      <div className="flex justify-between text-xs mb-1.5">
        <span className="text-paper/90">{name}</span>
        <span className="font-mono text-lilac-300">{level}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-violet-600 to-lilac-300"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Skills"
          title="Tools I build with"
          subtitle="A well-rounded toolkit spanning frontend, backend, databases, and the soft skills that make teams work."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, gi) => {
            const Icon = ICONS[group.icon] || FiCode;
            return (
              <Reveal key={group.category} delay={gi * 0.06}>
                <div className="glass rounded-2xl p-6 h-full hover:border-lilac-300/30 transition-colors">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-violet-800 flex items-center justify-center text-lg">
                      <Icon />
                    </span>
                    <h3 className="font-display font-semibold text-lg">{group.category}</h3>
                  </div>
                  <div className="flex flex-col gap-4">
                    {group.skills.map((s, i) => (
                      <SkillBar key={s.name} {...s} delay={i * 0.08} />
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
