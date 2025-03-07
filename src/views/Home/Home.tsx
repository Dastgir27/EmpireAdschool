
import MasterCampLanding from "./MasterCampLandingPage";
import MoneyBackGuarantee from "./MoneyBackGuarantee";
import ConnectForm from "./ConnectForm";
import TestimonialSlider from "./TestimonialSlider";
import MentorsSection from "./MentorsSection";
import ProgramSections from "./ProgramSections";
import { Brochure } from "./Brochure";

export default function Main() {

  return (
      <div>
          <MasterCampLanding/>
          <ProgramSections/>
          <MoneyBackGuarantee/>
          <MentorsSection/>
          <ConnectForm/>
          <Brochure/>
          {/* <TestimonialSlider/> */}
      </div>
  );
}
