import AiTools from "../../components/ai-tools/AiTools";
import Footer from "../../components/footer/Footer";
import Hero from "../../components/hero/Hero";
import Navbar from "../../components/navbar/Navbar";
import Plans from "../../components/plans/Plans";
import Testimonial from "../../components/testimonial/Testimonial";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <AiTools />
      <Testimonial />
      <Plans />
      <Footer />
    </>
  );
};

export default HomePage;
