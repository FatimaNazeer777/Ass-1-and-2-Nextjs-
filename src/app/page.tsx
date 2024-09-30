import About from "./about/page";
import Benefits from "./benefits/page";
import Contact from "./contact/page";
import Hero from "./hero/page";
import BestPlants from "./bestPlants/page";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <div>
      <Navbar/>
     <Hero/>
     {/* <About/>
     <BestPlants/>
     <Benefits/>
     <Contact/> */}
    </div>
  );
}
