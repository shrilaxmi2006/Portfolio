import Reveal from "./Reveal";

export default function SectionHeading({ eyebrow, title, subtitle, align = "center" }) {
  const alignment = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";
  return (
    <Reveal>
      <div className={`flex flex-col gap-4 max-w-2xl mb-14 md:mb-20 ${alignment}`}>
        {eyebrow && (
          <span className="section-eyebrow font-mono text-xs md:text-sm text-lilac-400 uppercase">
            {eyebrow}
          </span>
        )}
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="text-mist text-base md:text-lg leading-relaxed">{subtitle}</p>
        )}
      </div>
    </Reveal>
  );
}
