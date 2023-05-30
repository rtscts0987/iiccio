import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import About from "./About";

export default function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/reactroutedom" element={<Home />} />
        <Route path="/reactroutedom/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
