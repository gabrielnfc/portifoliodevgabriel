import Hero from "@/app/Hero/page";
import About from "@/app/About/page";
import Contact from "@/app/Contact/page";
import Projects from "@/app/Projects/page";
import type { NextPage } from "next";


const Home: NextPage = () => {

  return (
    <div>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};
export default Home;