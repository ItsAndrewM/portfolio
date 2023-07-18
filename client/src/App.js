import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Experience from "./pages/Experience";
import Home from "./pages/Home";
import Work from "./pages/Work";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
