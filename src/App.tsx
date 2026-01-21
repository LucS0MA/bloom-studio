import { Route, Routes } from "react-router";
import Layout from "./components/layout/layout";
import Home from "./pages/home";
import About from "./pages/about";
import OnlineStudio from "./pages/onlineStudio";
import Classes from "./pages/classes";
import Contact from "./pages/contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="classes" element={<Classes />} />
        <Route path="online" element={<OnlineStudio />} />
      </Route>
    </Routes>
  );
}

export default App;
