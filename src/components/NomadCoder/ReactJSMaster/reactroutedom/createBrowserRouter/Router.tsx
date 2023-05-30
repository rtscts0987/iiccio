import {
  createBrowserRouter,
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Root from "./Root";

const router = createBrowserRouter([
  {
    path: "",
    element: <Root />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);
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
