import Hero from "@/components/Hero";
import About from "@/components/About";
import Courses from "@/components/Courses";
import Feedback from "@/components/Feedback";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Courses />
      <Feedback />
      <Contact />
    </main>
  );
}