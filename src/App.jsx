import { useEffect, useState } from "react";
import BackgroundFX from "./components/BackgroundFX";
import GlowCursor from "./components/GlowCursor";
import Loader from "./components/Loader";
import ScrollProgress from "./components/ScrollProgress";
import BackToTop from "./components/BackToTop";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Stats from "./components/Stats";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Education from "./components/Education";
import Certificates from "./components/Certificates";
import Achievements from "./components/Achievements";
import CodingStats from "./components/CodingStats";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useTheme } from "./hooks/useTheme";

export default function App() {
  const [loading, setLoading] = useState(true);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1100);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <Loader show={loading} />
      <BackgroundFX />
      <GlowCursor />
      <ScrollProgress />
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <main>
        <Hero />
        <About />
        <Skills />
        <Stats />
        <Projects />
        <Services />
        <Education />
        <Certificates />
        <Achievements />
        <CodingStats />
        <Faq />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}
