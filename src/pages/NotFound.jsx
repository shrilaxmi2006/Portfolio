import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-ink" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-violet-700/40 rounded-full blur-3xl animate-pulse-glow" />
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-display text-8xl sm:text-9xl font-bold text-gradient"
      >
        404
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mt-4 text-lg text-mist max-w-md"
      >
        This page wandered off the stack trace. Let's get you back home.
      </motion.p>
      <motion.a
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        href="/"
        className="btn-glow mt-8 inline-flex items-center gap-2 font-semibold text-sm px-6 py-3.5 rounded-full bg-gradient-to-r from-violet-600 to-violet-800"
      >
        Back to Home
      </motion.a>
    </div>
  );
}
