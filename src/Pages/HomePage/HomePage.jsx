import ContactUs from "../../component/ContactUs/ContactUs";
import Home from "../../component/HomeSection/Home";
import Pricing from "../../component/Pricing/PricingSection/pricing";
import MyApp from "../../component/AppSection/MyApp";
import OurFeatures from "../../component/Features/OurFeatures";

// eslint-disable-next-line react/prop-types
const HomePage = ({ screenWidth }) => {
  return (
    <div>
      <Home screenWidth={screenWidth} />
      <OurFeatures />
      <MyApp />
      <ContactUs />
    </div>
  );
};

export default HomePage;
