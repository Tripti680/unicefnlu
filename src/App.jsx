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
import LegislationPage1 from "./Components/LegislationPage1";
import LegislationPage2 from "./Components/LegislationPage2";
import LegislationPage3 from "./Components/LegislationPage3";
import LegislationPage4 from "./Components/LegislationPage4";
import LegislationPage5 from "./Components/LegislationPage5";
import LegislationPage6 from "./Components/LegislationPage6";
import LegislationPage7 from "./Components/LegislationPage7";
import LegislationPage8 from "./Components/LegislationPage8";
import LegislationPage9 from "./Components/LegislationPage9";
import LegislationPage10 from "./Components/LegislationPage10";
import LegislationPage11 from "./Components/LegislationPage11";
import LegislationPage12 from "./Components/LegislationPage12";
import LegislationPage13 from "./Components/LegislationPage13";

function App() {
  return (
    <BrowserRouter >
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
        <Route path="/legislation1" element={<LegislationPage1 />} />
        <Route path="/legislation2" element={<LegislationPage2 />} />
        <Route path="/legislation3" element={<LegislationPage3 />} />
        <Route path="/legislation4" element={<LegislationPage4 />} />
        <Route path="/legislation5" element={<LegislationPage5 />} />
        <Route path="/legislation6" element={<LegislationPage6 />} />
        <Route path="/legislation7" element={<LegislationPage7 />} />
        <Route path="/legislation8" element={<LegislationPage8 />} />
        <Route path="/legislation9" element={<LegislationPage9 />} />
        <Route path="/legislation10" element={<LegislationPage10 />} />
        <Route path="/legislation11" element={<LegislationPage11 />} />
        <Route path="/legislation12" element={<LegislationPage12 />} />
        <Route path="/legislation13" element={<LegislationPage13 />} />

        <Route path="*" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
