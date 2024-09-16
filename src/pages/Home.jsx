import Carosul from "../components/Carosul";
import HowItWork from "../components/HowItWork";
import Services from "../components/Services";
import Stat from "../components/Stat";

export default function Home() {
  return (
    <div className="">
        <Carosul/>
        <Services/>
        <HowItWork/>
        <Stat/>
    </div>
  )
}
