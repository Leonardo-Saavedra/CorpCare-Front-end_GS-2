import { useEffect } from "react";
import { Routes, Route, useLocation,} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Faq from "./pages/Faq";
import Contato from "./pages/Contato";
import Integrantes from "./pages/Integrantes";
import Login from "./pages/login";
import Cadastro from "./pages/Cadastro";

import { ThemeProvider } from "./context/TemaEscuro";

function ScrollToTop(): null {
  const { pathname } = useLocation();
  useEffect(() => {
    try {
      if ("scrollRestoration" in window.history) window.history.scrollRestoration = "manual";
    } catch {}
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <ThemeProvider>
<div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 transition-colors duration-300">
  <Header />
  <ScrollToTop />
  <main className="flex-grow pt-24">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/contato" element={<Contato />} />
      <Route path="/integrantes" element={<Integrantes />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Cadastro" element={<Cadastro />} />
    </Routes>
  </main>
  <Footer />
</div>
    </ThemeProvider>
  );
}
