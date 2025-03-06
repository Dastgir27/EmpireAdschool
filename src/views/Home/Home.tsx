
import MasterCampLanding from "./MasterCampLandingPage";
import MoneyBackGuarantee from "./MoneyBackGuarantee";
import ConnectForm from "./ConnectForm";
import TestimonialSlider from "./TestimonialSlider";
import StartupWeekend from "./StartupWeekend";
import ProgramSections from "./ProgramSections";

export default function Main() {

  return (
      <div>
          <MasterCampLanding/>
          <ProgramSections/>
          <MoneyBackGuarantee/>
          <StartupWeekend/>
          <ConnectForm/>
          <TestimonialSlider/>
      </div>
  );
}
