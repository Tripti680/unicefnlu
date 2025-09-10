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

        <Route path="*" element={<Homepage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
