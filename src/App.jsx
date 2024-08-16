import AllNecessaryLinks from "./components/AllNecessaryLinks";
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
    </>
  );
}

export default App;
