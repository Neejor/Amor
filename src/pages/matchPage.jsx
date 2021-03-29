import "./matchStyles.css"
import MatchSec from "../components/matchComp/matchSection";
import Navbar from "../components/matchComp/navbar";
import ProfileModal from "../components/matchComp/profileModal";

export default function MatchPage() {
  return (
    <div className="App">
      <ProfileModal />
      <Navbar />
      <h3 className="matchHeading">Mark your preferences!</h3>
      <MatchSec />
    </div>
  );
}
