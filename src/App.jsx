import Header from "./Components/Header";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  HashRouter,
} from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";
import Homepage from "./Dashboard/Homepage";
import Publication from "./screens/Headerscreen/Publication";
import Contact from "./screens/Headerscreen/Contact";
import Fellowship from "./screens/Headerscreen/Fellowship";
import AboutUs from "./screens/Headerscreen/AboutUs";
import Construction from "./Components/Construction";
import FellowsInformation from "./screens/Headerscreen/FellowsInformation";
import Legislations from "./screens/Headerscreen/Legislations";
import Landmark from "./screens/Headerscreen/Landmark";
import Obligations from "./screens/Headerscreen/Obligations";
import Notable from "./screens/Headerscreen/Notable";
import NewsDigest from "./screens/Headerscreen/NewsDigest";
import Opinion1 from "./screens/Headerscreen/Opinion1";
import ChildRight from "./screens/Headerscreen/ChildRight";
import QuarterlyNewsletter from "./screens/Headerscreen/QuarterlyNewsletter";
import MarqueFirst from "./screens/Headerscreen/MarqueFirst";
import LandmarkPage1 from "./Components/LandmarkPage1";
import LandmarkPage2 from "./Components/LandmarkPage2";
import LandmarkPage3 from "./Components/LandmarkPage3";
import LandmarkPage4 from "./Components/LandmarkPage4";
import LandmarkPage5 from "./Components/LandmarkPage5";
import LandmarkPage6 from "./Components/LandmarkPage6";
import LandmarkPage7 from "./Components/LandmarkPage7";
import LandmarkPage8 from "./Components/LandmarkPage8";
import LandmarkPage9 from "./Components/LandmarkPage9";
import LandmarkPage10 from "./Components/LandmarkPage10";
import LandmarkPage11 from "./Components/LandmarkPage11";
import LandmarkPage12 from "./Components/LandmarkPage12";
import LandmarkPage13 from "./Components/LandmarkPage13";
import LandmarkPage14 from "./Components/LandmarkPage14";
import LandmarkPage15 from "./Components/LandmarkPage15";
import LandmarkPage16 from "./Components/LandmarkPage16";
import LandmarkPage17 from "./Components/LandmarkPage17";
import LandmarkPage18 from "./Components/LandmarkPage18";

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/fellowship" element={<Fellowship />} />
        <Route path="/publication" element={<Publication />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/construction" element={<Construction />} /> */}
        <Route path="/fellowsInformation" element={<FellowsInformation />} />

        <Route path="/legislations" element={<Legislations />} />
        <Route path="/landmark" element={<Landmark />} />
        <Route path="/obligations" element={<Obligations />} />
        <Route path="/notable" element={<Notable />} />
        <Route path="/newsdigest" element={<NewsDigest />} />

        <Route path="/opinion1" element={<Opinion1 />} />

        <Route path="/childright" element={<ChildRight />} />
        <Route path="/quarterlynewsletter" element={<QuarterlyNewsletter />} />
        <Route path="/marquefirst" element={<MarqueFirst />} />
        <Route path="/landmark1" element={<LandmarkPage1 />} />
        <Route path="/landmark2" element={<LandmarkPage2 />} />
        <Route path="/landmark3" element={<LandmarkPage3 />} />
        <Route path="/landmark4" element={<LandmarkPage4 />} />
        <Route path="/landmark5" element={<LandmarkPage5 />} />
        <Route path="/landmark6" element={<LandmarkPage6 />} />
        <Route path="/landmark7" element={<LandmarkPage7 />} />
        <Route path="/landmark8" element={<LandmarkPage8 />} />
        <Route path="/landmark9" element={<LandmarkPage9 />} />
        <Route path="/landmark10" element={<LandmarkPage10 />} />
        <Route path="/landmark11" element={<LandmarkPage11 />} />
        <Route path="/landmark12" element={<LandmarkPage12 />} />
        <Route path="/landmark13" element={<LandmarkPage13 />} />
        <Route path="/landmark14" element={<LandmarkPage14 />} />
        <Route path="/landmark15" element={<LandmarkPage15 />} />
        <Route path="/landmark16" element={<LandmarkPage16 />} />
        <Route path="/landmark17" element={<LandmarkPage17 />} />
        <Route path="/landmark18" element={<LandmarkPage18 />} />

        <Route path="*" element={<Homepage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
