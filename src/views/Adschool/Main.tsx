import React from "react";
import MasterCampLanding from "./MasterCampLandingPage";
import MoneyBackGuarantee from "./MoneyBackGuarantee";
import Footer from "./Footer";
import ConnectForm from "./ConnectForm";
import TestimonialSlider from "./TestimonialSlider";
import StartupWeekend from "./StartupWeekend";

export default function Main() {

  return (
      <div>
        <div>
          <MasterCampLanding/>
          <MoneyBackGuarantee/>
          <StartupWeekend/>
          <ConnectForm/>
          <TestimonialSlider/>
          <Footer/>
        </div>
      </div>
  );
}
