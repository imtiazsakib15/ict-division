import AllNecessaryLinks from "./components/AllNecessaryLinks";
import FloodTime from "./components/FloodTime";
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
    </>
  );
}

export default App;
