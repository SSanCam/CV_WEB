import { Helmet } from "react-helmet-async";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Legal from "./pages/Legal";
import Construction from "./pages/Construction";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

const routerBasename = import.meta.env.BASE_URL === "/" ? undefined : import.meta.env.BASE_URL.replace(/\/$/, "");

function App() {
  return (
    <>
      <Helmet>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Helmet>

      <BrowserRouter basename={routerBasename}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre-mi" element={<About />} />
            <Route path="/proyectos" element={<Projects />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/legal" element={<Legal />} />
            <Route path="*" element={<Construction />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
