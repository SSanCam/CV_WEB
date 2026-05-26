import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Legal from "./pages/Legal";
import Construction from "./pages/Construction";

const routerBasename =
  import.meta.env.BASE_URL === "/"
    ? undefined
    : import.meta.env.BASE_URL.replace(/\/$/, "");

function App() {
  return (
    <BrowserRouter basename={routerBasename}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Construction />} />
          <Route path="/projects" element={<Construction />} />
          <Route path="/contact" element={<Construction />} />
          <Route path="/legal" element={<Legal />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;