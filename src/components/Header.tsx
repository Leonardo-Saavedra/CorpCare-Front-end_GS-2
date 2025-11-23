import { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/TemaEscuro";

export default function Header() {
  const [menuAtivo, setMenuAtivo] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
<header className="bg-gray-200 dark:bg-gray-900 shadow-md fixed w-full z-50 transition-colors duration-300 border-b border-gray-300 dark:border-gray-600">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-2 py-4 gap-2 md:gap-4">
        <div className="flex items-center gap-2 md:gap-6">
          <Link to="/" className="flex items-center logo-link">
            <img
              src={theme === "dark" ? "/src/assets/LogoTemaEscuro.png" : "/src/assets/Logo.png"}
              alt="CorpCare"
              className="h-16 md:h-28 w-auto object-contain"
            />
          </Link>
          <Link
            to="/"
            className="hidden sm:inline text-gray-800 dark:text-gray-100 font-semibold hover:text-blue-700 dark:hover:text-blue-400 transition-colors px-2 py-1 rounded-md text-sm md:text-base"
            aria-label="Início"
          >
            Início
          </Link>
          <Link
            to="/sobre"
            className="hidden sm:inline text-gray-800 dark:text-gray-100 font-semibold hover:text-blue-700 dark:hover:text-blue-400 transition-colors px-2 py-1 rounded-md text-sm md:text-base"
          >
            Sobre
          </Link>
          <Link
            to="/faq"
            className="hidden md:inline text-gray-800 dark:text-gray-100 font-semibold hover:text-blue-700 dark:hover:text-blue-400 transition-colors px-2 py-1 rounded-md text-sm md:text-base"
          >
            FAQ
          </Link>
          <Link
            to="/contato"
            className="hidden md:inline text-gray-800 dark:text-gray-100 font-semibold hover:text-blue-700 dark:hover:text-blue-400 transition-colors px-2 py-1 rounded-md text-sm md:text-base"
          >
            Contato
          </Link>
          <Link
            to="/integrantes"
            className="hidden md:inline text-gray-800 dark:text-gray-100 font-semibold hover:text-blue-700 dark:hover:text-blue-400 transition-colors px-2 py-1 rounded-md text-sm md:text-base"
          >
            Integrantes
          </Link>
        </div>
        <button
          className="md:hidden text-3xl text-gray-800 dark:text-gray-100 z-50 relative"
          onClick={() => setMenuAtivo(!menuAtivo)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
        <nav
          className={`${
            menuAtivo ? "block" : "hidden"
          } absolute top-full right-0 max-h-[calc(100vh-56px)] w-64 overflow-auto bg-white dark:bg-gray-900 shadow-md md:static md:block md:shadow-none md:ml-8 transition-colors duration-300 z-40`}
        >
          <ul className="flex flex-col gap-4 p-4 md:hidden text-gray-700 dark:text-gray-300 font-semibold">
            <li><Link to="/" className="hover:text-blue-700 dark:hover:text-blue-400">Início</Link></li>
            <li><Link to="/sobre" className="hover:text-blue-700 dark:hover:text-blue-400">Sobre</Link></li>
            <li><Link to="/faq" className="hover:text-blue-700 dark:hover:text-blue-400">FAQ</Link></li>
            <li><Link to="/contato" className="hover:text-blue-700 dark:hover:text-blue-400">Contato</Link></li>
            <li><Link to="/integrantes" className="hover:text-blue-700 dark:hover:text-blue-400">Integrantes</Link></li>
          </ul>
        </nav>
        <div className="flex items-center gap-2 md:gap-4">
          <button
            onClick={toggleTheme}
            aria-label="Alternar Tema"
            className="px-3 py-1 rounded-md bg-gray-700 text-white dark:bg-white text-gray-800 dark:text-gray-800 font-semibold transition-colors duration-300 hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none flex items-center justify-center text-sm md:text-base"
            title="Alternar tema claro/escuro"
          >
            Tema
          </button>
          <Link to="/login" className="flex items-center h-8 w-8 md:h-10 md:w-10">
            <img src="/src/assets/login.png" alt="Login" className="h-full w-full object-contain" />
          </Link>
        </div>
      </div>
    </header>
  );
}
