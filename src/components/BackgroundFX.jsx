import { useEffect, useRef } from "react";

/**
 * Ambient background: soft gradient blobs + a lightweight particle field
 * rendered on a canvas. Respects prefers-reduced-motion.
 */
export default function BackgroundFX() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const canvas = canvasRef.current;
    if (!canvas || reduce) return;
    const ctx = canvas.getContext("2d");
    let animationId;
    let particles = [];

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    function init() {
      resize();
      const count = Math.min(60, Math.floor((canvas.width * canvas.height) / 26000));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.6 + 0.4,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
        o: Math.random() * 0.5 + 0.15,
      }));
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(196,181,253,${p.o})`;
        ctx.fill();
      });
      animationId = requestAnimationFrame(draw);
    }

    init();
    draw();
    window.addEventListener("resize", init);
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", init);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-ink" />
      <div className="absolute -top-40 -left-32 w-[32rem] h-[32rem] bg-violet-700/50 rounded-full animate-pulse-glow blur-3xl" />
      <div className="absolute top-1/3 -right-40 w-[28rem] h-[28rem] bg-violet-600/40 rounded-full animate-blob blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-[26rem] h-[26rem] bg-violet-500/30 rounded-full animate-float-slow blur-3xl" />
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-70" />
      <div className="absolute inset-0 grain" />
    </div>
  );
}
