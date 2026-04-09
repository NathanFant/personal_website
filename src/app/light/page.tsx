import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import OSS from "@/components/OSS";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function LightHome() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <OSS />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </>
  );
}