export default function Footer() {
  return (
    <footer className="bg-blue-700 dark:bg-gray-900 text-white py-2 mt-0 border-t border-blue-600 dark:border-gray-600 transition-colors duration-300">
      <div className="max-w-5xl mx-auto text-center px-6">
        <h3 className="text-lg font-semibold mb-2">CorpCare</h3>
        <p className="text-sm text-blue-100 dark:text-gray-400 mb-1">Soluções para bem‑estar e saúde mental no trabalho</p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-3">
          <a href="mailto:contact@corpcare.io" className="text-sm hover:underline">contact@corpcare.io</a>
        </div>

        <p className="mt-3 text-sm text-blue-100 dark:text-gray-400">
          © {new Date().getFullYear()} CorpCare — Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
