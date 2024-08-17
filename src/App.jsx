import AllNecessaryLinks from "./components/AllNecessaryLinks";
import BottomBar from "./components/BottomBar";
import EmergencyHotline from "./components/EmergencyHotline";
import FloodTime from "./components/FloodTime";
import Footer from "./components/Footer";
import ImageAndNotice from "./components/ImageAndNotice";
import Navbar from "./components/Navbar";
import OtherLinks from "./components/OtherLinks";
import Topbar from "./components/Topbar";

function App() {
  return (
    <>
      <Topbar />
      <Navbar />
      <ImageAndNotice />
      <AllNecessaryLinks />
      <OtherLinks />
      <FloodTime />
      <EmergencyHotline />
      <BottomBar />
      <Footer />
    </>
  );
}

export default App;
