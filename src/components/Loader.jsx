import { motion, AnimatePresence } from "framer-motion";

export default function Loader({ show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <div className="flex flex-col items-center gap-5">
            <div className="relative w-16 h-16">
              <div className="absolute inset-0 rounded-full border-2 border-lilac-400/20" />
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-transparent border-t-lilac-300 border-r-violet-500"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
              />
            </div>
            <span className="font-mono text-xs tracking-[0.3em] text-lilac-300 uppercase">
              Loading portfolio
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
