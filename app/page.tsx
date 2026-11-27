import Hero from "@/components/Hero";
import About from "@/components/About";
import Courses from "@/components/Courses";
import Faculty from "@/components/Faculty"; // ಹೊಸ ಫ್ಯಾಕಲ್ಟಿ ಕಾಂಪೋನೆಂಟ್
import FeedbackPreview from "@/components/FeedbackPreview";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Courses />
      <Faculty /> {/* ಇಲ್ಲಿ ಫ್ಯಾಕಲ್ಟಿ ಸೆಕ್ಷನ್ ಸೇರಿಸಲಾಗಿದೆ */}
      <FeedbackPreview />
      <Contact />
    </main>
  );
}