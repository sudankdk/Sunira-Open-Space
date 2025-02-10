import { Hero } from "../Component/Hero";
import Navbar from "../Component/Navbar";
import Services from "../Component/Services";
import { Whatsapp } from "../Component/Whatssapp";

const Home = () => {
  return (
    <>
      <Navbar />
      <Whatsapp />
      <Hero />
      <Services />
    </>
  );
};

export default Home;
