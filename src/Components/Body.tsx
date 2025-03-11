import Skills from "./Skills";
import Projects from "./Projects";
import Bio from "./Bio";
import Experience from "./Experience";

import Footer from "./Footer";
const Body = () => {
  return (
    <div className="md:p-20 p-10 mt-14 md:mt-0">
      <Bio/>
      <Skills />
      <Projects />
      <Experience />
      <Footer />
    </div>
  );
};

export default Body;
