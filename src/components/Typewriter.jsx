import { useEffect, useState } from "react";

export default function Typewriter({ words, typingSpeed = 70, pause = 1400 }) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    let timeout;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => i + 1);
    } else {
      timeout = setTimeout(() => {
        setText((t) =>
          deleting ? current.slice(0, t.length - 1) : current.slice(0, t.length + 1)
        );
      }, deleting ? typingSpeed / 2 : typingSpeed);
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, index, words, typingSpeed, pause]);

  return (
    <span className="font-mono">
      {text}
      <span className="inline-block w-[2px] h-[1em] bg-lilac-300 ml-1 align-middle animate-pulse" />
    </span>
  );
}
