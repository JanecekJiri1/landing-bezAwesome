import Background from "./components/BackGround/Background";
import MiddleStripe from "./components/Middlestripe/MiddleStripe";
import TopText from "./components/TopText/TopText";
import Icons from "./components/Icons/Icons";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <Background>
      <TopText />
      <MiddleStripe />
      <Icons />
      <Footer />
    </Background>
  );
};

export default App;
