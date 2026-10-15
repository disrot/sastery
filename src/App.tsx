import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { brand, partners } from "./network";
import { DirectoryPage } from "./pages/DirectoryPage";
import { Home } from "./pages/Home";
import { PlaylistPage } from "./pages/PlaylistPage";
import { SubmitPage } from "./pages/SubmitPage";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    if (pathname === "/") document.title = "Sastery — for artists & partners";
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <a className="skip" href="#brand">
        Skip to channels
      </a>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/channels"
            element={
              <DirectoryPage
                eyebrow="Our brand"
                title="Brand channels."
                lede="Every brand channel, highest subscriber count first."
                channels={brand}
              />
            }
          />
          <Route
            path="/partners"
            element={
              <DirectoryPage
                eyebrow="Our partners"
                title="Partners."
                lede="Every partner channel, highest subscriber count first."
                channels={partners}
              />
            }
          />
          <Route path="/playlist" element={<PlaylistPage />} />
          <Route path="/submit" element={<SubmitPage />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
