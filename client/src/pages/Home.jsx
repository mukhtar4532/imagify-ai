import Description from "../components/Description";
import GenerateBtn from "../components/GenerateBtn";
import Header from "../components/Header";
import Steps from "../components/Steps";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <main>
      <Header />
      <Steps />
      <Description />
      <Testimonials />
      <GenerateBtn />
    </main>
  );
};

export default Home;
