import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import HomePage from "./components/home";
import AboutPage from "./pages/About";
import SolutionPage from "./pages/Solution";
import MissionPage from "./pages/Mission";
import VisionPage from "./pages/Vision";
import MarketPage from "./pages/Market";
import ContactPage from "./pages/Contact";

function App() {
  return (
    <ThemeProvider>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Suspense fallback={<div className="flex h-screen items-center justify-center">Loading...</div>}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/solution" element={<SolutionPage />} />
              <Route path="/mission" element={<MissionPage />} />
              <Route path="/vision" element={<VisionPage />} />
              <Route path="/market" element={<MarketPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </ThemeProvider>
  );
}

export default App;