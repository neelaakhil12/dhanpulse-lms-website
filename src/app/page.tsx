import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import ProblemSolution from "@/components/sections/ProblemSolution";
import CourseLadder from "@/components/sections/CourseLadder";
import TrustSection from "@/components/sections/TrustSection";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <div className="bg-white flex flex-col gap-12 lg:gap-16">
      <Hero />
      <CourseLadder />
      <Services />
      <ProblemSolution />
      <TrustSection />
      <FinalCTA />
    </div>
  );
}
