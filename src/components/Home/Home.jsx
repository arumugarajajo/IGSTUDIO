import React from "react";
import "./Home.css"
import NavbarWithProfileContainer from "../NavbarWithProfileContainer/NavbarWithProfileContainer";
import Introduce from "../Introduce/Introduce";
import ChooseUs from "../ChooseUs/ChooseUs";
import AreaOfPractice from "../AreaOfPractice/AreaOfPractice";
import HappyClients from "../HappyClients/HappyClients";
import OurTeam from "../OurTeam/OurTeam";
import FAQs from "../FAQs/FAQs";
import Subscribe from "../Subscribe/Subscribe";
import Footer from "../Footer/Footer";
function Home() {
  return <div className="home">
    <NavbarWithProfileContainer />
    <Introduce />
    <ChooseUs />
    <AreaOfPractice />
    <HappyClients />
    <OurTeam />
    <FAQs />
    <Subscribe />
    <Footer />
  </div>;
}

export default Home;
