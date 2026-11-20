import { useEffect, useRef } from "react";

/** Soft radial glow that follows the pointer on desktop, ignored on touch. */
export default function GlowCursor() {
  const ref = useRef(null);

  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;
    const el = ref.current;
    let raf;
    const move = (e) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        if (el) {
          el.style.transform = `translate(${e.clientX - 200}px, ${e.clientY - 200}px)`;
          el.style.opacity = "1";
        }
      });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed top-0 left-0 w-[400px] h-[400px] rounded-full -z-10 opacity-0 transition-opacity duration-500 hidden md:block"
      style={{
        background:
          "radial-gradient(circle, rgba(139,47,224,0.16) 0%, rgba(139,47,224,0) 70%)",
        willChange: "transform",
      }}
    />
  );
}
