import { useState } from "react";
import { motion } from "framer-motion";
import { stats } from "../data/misc";
import { useCountUp } from "../hooks/useCountUp";

function StatItem({ label, value, start }) {
  const count = useCountUp(value, 1600, start);
  return (
    <div className="text-center">
      <p className="font-display text-4xl sm:text-5xl font-bold text-gradient">{count}+</p>
      <p className="text-mist text-xs sm:text-sm mt-2 uppercase tracking-wider">{label}</p>
    </div>
  );
}

export default function Stats() {
  const [start, setStart] = useState(false);
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="mx-auto max-w-6xl glass-strong glow-ring rounded-3xl px-6 sm:px-10 py-12"
        onViewportEnter={() => setStart(true)}
        viewport={{ once: true, amount: 0.4 }}
      >
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-8">
          {stats.map((s) => (
            <StatItem key={s.label} {...s} start={start} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
