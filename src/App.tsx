import { Route, Routes } from "react-router";
import ReactLenis from "lenis/react";

import Layout from "./components/layout/layout";
import Home from "./pages/home";
import About from "./pages/about";
import OnlineStudio from "./pages/onlineStudio";
import Classes from "./pages/classes";
import Contact from "./pages/contact";
import ScrollToTop from "./components/ui/scrollToTop";

function App() {
  return (
    <ReactLenis root options={{ lerp: 0.1 }}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="classes" element={<Classes />} />
          <Route path="online" element={<OnlineStudio />} />
        </Route>
      </Routes>
    </ReactLenis>
  );
}

export default App;
