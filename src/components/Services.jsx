import {
  FiGlobe,
  FiLayout,
  FiServer,
  FiCpu,
  FiEye,
  FiDatabase,
  FiBarChart2,
} from "react-icons/fi";
import { services } from "../data/misc";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const ICONS = {
  globe: FiGlobe,
  layout: FiLayout,
  server: FiServer,
  ai: FiCpu,
  vision: FiEye,
  database: FiDatabase,
  analytics: FiBarChart2,
};

export default function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Services" title="What I can help you build" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => {
            const Icon = ICONS[s.icon] || FiGlobe;
            return (
              <Reveal key={s.title} delay={(i % 3) * 0.08}>
                <div className="glass rounded-2xl p-6 h-full hover:border-lilac-300/40 hover:-translate-y-1 transition-all">
                  <span className="w-11 h-11 rounded-xl bg-gradient-to-br from-violet-600 to-violet-800 flex items-center justify-center text-lg mb-4">
                    <Icon />
                  </span>
                  <h3 className="font-display font-semibold text-lg">{s.title}</h3>
                  <p className="text-mist text-sm mt-2 leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
